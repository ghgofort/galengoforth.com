/**
 * React component to show the humidity, pressure, & temperature readings
 * from the Raspberry Pi values from the NodeJS API.
 */

import { useState, useEffect } from 'react';
import './hpt.css';

function HPT(props) {
    const [apiResponse, setApiResponse] = useState([]);
    useEffect(() => { 
        if ('apiResponse' in props && props.apiResponse.length) {
            setApiResponse(props.apiResponse.reverse()); 
        }
    }, [props, props.apiResponse]);

    return (
        <div className="hpt__component">
            <div className="hpt__header">
                <h3>Readings Table - Last 24 hours</h3>
            </div>
                <div className="hpt__record hpt__record--table-header">
                    <p className="hpt__slide hpt__slide--col1"><strong>Date</strong></p>
                    <p className="hpt__slide hpt__slide--col2"><strong>Time</strong></p>
                    <p className="hpt__slide hpt__slide--col3">Humidity</p>
                    <p className="hpt__slide hpt__slide--col4">Pressure</p>
                    <p className="hpt__slide hpt__slide--col5">Temperature (f)</p>
                </div>
                {
                apiResponse.map((item, index) => {
                    const key = index;
                    return (
                        <div key={key} className="hpt__record">
                            <p className="hpt__slide hpt__slid--col1">{item.date}</p>
                            <p className="hpt__slide hpt__slid--col2">{item.time}</p>
                            <p className="hpt__slide hpt__slid--col3">{String(item.humidity).substring(0, 10)}</p>
                            <p className="hpt__slide hpt__slid--col4">{String(item.pressure_inHg).substring(0, 10)}</p>
                            <p className="hpt__slide hpt__slid--col5">{String(item.temperature_F).substring(0, 6)}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default HPT;
