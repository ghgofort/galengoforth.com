/**
 * React component to show the humidity, pressure, & temperature readings
 * from the Raspberry Pi values from the NodeJS API.
 */

import React, { useState, useEffect } from 'react';
import './hpt.css';

const getHPT = async () => {
    const response = await fetch('https://pi-services-59qvrknrb-galen-goforths-projects.vercel.app/hpt');
    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.message);
    }
    return body;

};

function HPT() {
    const [apiResponse, setApiResponse] = useState("*** now loading ***");
    useEffect(() => {
        getHPT()
            .then(res => res.text())
            .then(res => setApiResponse(res))
            .catch(err => err);
    }, []);

    return (
        <div className="hpt__component">
            {apiResponse}
        </div>
    );
};

export default HPT;
