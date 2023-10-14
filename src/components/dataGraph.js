/**
 * @fileoverview  This file contains the DataGraph component. This component is
 * responsible for rendering each field from the HPT readings in a graph. Each
 * field has a checkbox that allows the user to toggle the field on and off.
 */

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto";
import './dataGraph.css';

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
    console.log('url:', url);

    if (response.status !== 200) {
        throw Error(body.message);
    }
    return body;

};

function DataGraph() {
    const [data, setData] = useState({ humidity: [], pressure: [], temperature: [] });
    const [labels, setLabels] = useState([]);
    const [numDays, setNumDays] = useState(1);

    useEffect(() => {
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

        const formatDateString = (date) => {
            return (date.getMonth() + 1) + '/' + date.getDate();
        };

        getHPT({ count: (numDays * 24) }).then(res => {
            let lastDateString = '';
            const humidityData = [];
            const pressureData = [];
            const temperatureData = [];
            const labels = [];
            res.reverse().forEach((item) => {
                const date = new Date((item.dateTimeCreated.seconds * 1000));
                const dateString = formatDateString(date);
                const time = formatTime(date);
                if (dateString !== lastDateString) {
                    labels.push(dateString + ' ' + time);
                    lastDateString = dateString;
                } else {
                    labels.push(time);
                }
                humidityData.push(item.humidity);
                pressureData.push(item.pressure_inHg);
                temperatureData.push(item.temperature_F);
            });

            const apiData = {
                humidity: humidityData,
                pressure: pressureData,
                temperature: temperatureData
            };
            console.log('api data: ', apiData);
            setData(apiData);
            setLabels(labels);
        }).catch(err => {
            console.error(err);
        });
    }, [numDays]);

    const dataGraphOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: true
    };

    const dataGraphData = {
        labels: labels,
        datasets: [
            {
                data: [],
                label: 'Humidity',
                fill: false,
                borderColor: 'rgb(15, 192, 192)',
                tension: 0.1
            },
            {
                data: [],
                label: 'Pressure',
                fill: false,
                borderColor: 'rgb(255, 33, 200)',
                tension: 0.1
            },
            {
                data: [],
                label: 'Temperature',
                fill: false,
                borderColor: 'rgb(32,255,0)',
                tension: 0.1
            }
        ]
    };

    dataGraphData.datasets[0].data = data.humidity;
    dataGraphData.datasets[1].data = data.pressure;
    dataGraphData.datasets[2].data = data.temperature;

    const handleNumDaysChange = (event) => {
        setNumDays(parseInt(event.target.value));
    };

    return (
        <div className="dataGraph__component">
            <div className="dataGraph__header">
                <h2>Humidity, Pressure, & Temperature Readings from Raspberry Pi server.</h2>
            </div>
            <div className="dataGraph__graph">
                <h3>Temp, Pressure, & Humidity Graph</h3>
                <Line data={dataGraphData} options={dataGraphOptions} updateMode="resize" />
            </div>
            <div className="dataGraph__timeframe">
                <label htmlFor="numDays">Number of days: </label>
                <input type="number" id="numDays" name="numDays" min="1" max="30" value={numDays} onChange={handleNumDaysChange} />
            </div>
        </div>
    );
}
export default DataGraph;
