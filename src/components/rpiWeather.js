import React, { useState, useEffect } from 'react';
import DataGraph from './dataGraph';
import HPT from './hpt';

const getHPT = async (params) => {
    let url = 'https://pi-services.vercel.app/hpt';
    if (params) {
        url += '?';
        if (params.count) {
            url += 'count=' + params.count;
        }
    }
    const response = await fetch(url);
    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.message);
    }
    return body;

};

/**
 * Helper function to get formatted Time string from a JS Date object.
 * @param {Date} date - JS Date object to be formatted.
 * @returns {string} - Returns a string in the format of 'HH:MM AM/PM'.
 */
const formatTime = (date) => {
    let time = '';
    let isAM = true;
    if (date.getHours() > 12) {
        time = date.getHours() - 12;
        isAM = false;
    } else if (date.getHours() === 0 || date.getHours() === 12) {
        time = 12;
        if (date.getHours() === 12) {
            isAM = false;
        }
    } else {
        time = date.getHours();
    }
    time = time + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ' ' + (isAM ? 'AM' : 'PM');
    return time;
};

/**
 * Helper function to get formatted Date string from a JS Date object.
 * @param {Date} date - JS Date object to be formatted.
 * @returns {string} - Returns a string in the format of 'MM/DD'.
 */
const formatDateString = (date) => {
    return (date.getMonth() + 1) + '/' + date.getDate();
};

/**
 * React component to show the humidity, pressure, & temperature readings both in a table and a graph.
 * @returns {JSX.Element} - Returns the JSX for the RPIWeather component.
 */
function RPIWeather() {
    const [apiResponse, setAPIResponse] = useState([]);
    const [numDays, setNumDays] = useState(1);

    /**
     * Handles change to number of days input field.
     * @param {Event} event - Event object from the input field.
     */
    const handleNumDaysChange = (event) => {
        setNumDays(parseInt(event.target.value));
    };

    useEffect(() => {
        console.log('numDays: ', numDays);
        getHPT({ count: (numDays * 24) }).then(res => {
            let apiData = [];
            console.log('response: ', res);
            res.forEach((item) => {
                const date = new Date((item.dateTimeCreated.seconds * 1000));
                const dateString = formatDateString(date);
                const time = formatTime(date);
                apiData.push({
                    date: dateString,
                    time: time,
                    humidity: item.humidity,
                    pressure_inHg: item.pressure_inHg,
                    temperature_F: item.temperature_F
                });
            });
            setAPIResponse(apiData);
        }).catch(err => console.error(err));
    }, [numDays]);

    return (
        <div className="RPIWeather__component">
            <div className="dataGraph__timeframe">
                <label htmlFor="numDays">Number of days: </label>
                <input type="number" id="numDays" name="numDays" min="1" max="7" value={numDays} onChange={handleNumDaysChange} />
            </div>
            <DataGraph apiResponse={apiResponse} />
            <HPT apiResponse={apiResponse} />
        </div>
    );
}

export default RPIWeather;