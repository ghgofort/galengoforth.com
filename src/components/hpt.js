/**
 * React component to show the humidity, pressure, & temperature readings
 * from the Raspberry Pi values from the NodeJS API.
 */

import React, { useState, useEffect } from 'react';
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
            .then(res => setApiResponse(res))
            .catch(err => err);
    }, []);

    return (
        <div className="hpt__component">
            <h4>Humidity, Pressure, & Temperature Readings from Raspberry Pi server.</h4>
            {apiResponse.map((item, index) => (
                <div key={index}>
                    <h5>Date / Time: {new Date((item.dateTimeCreated.seconds * 1000)).toDateString()}</h5>
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
            ))}
        </div>
    );
};

export default HPT;
