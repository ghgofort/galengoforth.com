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
    useEffect(() => { getHPT().then(res => { setApiResponse(res); }).catch(err => err); }, []);

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
                    const date = new Date((item.dateTimeCreated.seconds * 1000));
                    let time = '';
                    let isAM = true;
                    if (date.getHours() > 12) {
                        time = date.getHours() - 12;
                        isAM = false;
                    } else if (date.getHours() === 0) {
                        time = 12;
                    } else if (date.getHours() === 12) {
                        time = 12;
                        isAM = false;
                    } else {
                        time = date.getHours();
                    }
                    time = time + ':' + (date.getMinutes() < 10 ? '0' +
                        date.getMinutes() : date.getMinutes()) + ' ' +
                        (isAM ? 'AM' : 'PM');
                        let key = 'hpt_slide' + time + index;
                    return (
                        <div key={key} className="hpt__record">
                            <p className="hpt__slide hpt__slid--col1">{date.toDateString()}</p>
                            <p className="hpt__slide hpt__slid--col2">{time}</p>
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
