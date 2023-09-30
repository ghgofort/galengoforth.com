/**
 * React component to show the humidity, pressure, & temperature readings
 * from the Raspberry Pi values from the NodeJS API.
 */

import { useState, useEffect } from 'react';
import './hpt.css';

const getHPT = async () => {
    const response = await fetch('https://pi-services.vercel.app/hpt');
    const body = await response.json();
    console.log(body);

    if (response.status !== 200) {
        throw Error(body.message);
    }
    return body;

};

function HPT() {
    const [apiResponse, setApiResponse] = useState([]);
    useEffect(() => {
        getHPT()
            .then(res => {
                // only show 1st 10 readings.
                res = res.slice(0, 10);
                setApiResponse(res);
            }).catch(err => err);
    }, []);

    return (
        <div className="hpt__component">
            <h4>Humidity, Pressure, & Temperature Readings from Raspberry Pi server.</h4>
            {
                apiResponse.map((item, index) => {
                    const date = new Date((item.dateTimeCreated.seconds * 1000));
                    let time = '';
                    let isAM = true;
                    if (date.getHours() > 12) {
                        time = date.getHours() - 12;
                        isAM = false;
                    } else if (date.getHours() === 0) {
                        time = 12;
                    } else {
                        time = date.getHours();
                    }
                    time = time + ':' + (date.getMinutes() < 10 ? '0' +
                        date.getMinutes() : date.getMinutes()) + ' ' +
                        (isAM ? 'AM' : 'PM');
                    return (
                        <div key={index}>
                            <p><strong>Date: </strong>{date.toDateString()} <strong>Time:</strong> {time}</p>
                            <p className="hpt__slide">
                                Humidity: {item.humidity}
                            </p>
                            <p className="hpt__slide">
                                Pressure: {item.pressure_inHg}
                            </p>
                            <p className="hpt__slide">
                                Temperature (f): {item.temperature_F}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default HPT;
