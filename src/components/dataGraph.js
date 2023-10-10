/**
 * @fileoverview  This file contains the DataGraph component. This component is
 * responsible for rendering each field from the HPT readings in a graph. Each
 * field has a checkbox that allows the user to toggle the field on and off.
 */

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto";
import './dataGraph.css';

const getHPT = async () => {
    const response = await fetch('https://pi-services.vercel.app/hpt');
    const body = await response.json();
    console.log(body);

    if (response.status !== 200) {
        throw Error(body.message);
    }
    return body;

};

function DataGraph() {
    const [data, setData] = useState({ humidity: [], pressure: [], temperature: [] });
    const [labels, setLabels] = useState([]);
    const [checked, setChecked] = useState({
        humidity: true,
        pressure: true,
        temperature: true
    });

    useEffect(() => {
        const humidityData = [];
        const pressureData = [];
        const temperatureData = [];
        const labels = [];
        getHPT().then(res => {
            res.forEach((item) => {
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
                labels.push(time);
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
    }, []);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setChecked(prevState => ({
            ...prevState,
            [name]: checked
        }));
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

    if (checked.humidity) {
        dataGraphData.datasets[0].data = data.humidity;
    }
    if (checked.pressure) {
        dataGraphData.datasets[1].data = data.pressure;
    }
    if (checked.temperature) {
        dataGraphData.datasets[2].data = data.temperature;
    }

    return (
        <div className="dataGraph__component">
            <div className="dataGraph__header">
                <h2>Humidity, Pressure, & Temperature Readings from Raspberry Pi server.</h2>
            </div>
            <div className="dataGraph__checkboxes">
                <label>
                    <input
                        name="humidity"
                        type="checkbox"
                        checked={checked.humidity}
                        onChange={handleCheckboxChange}
                    />
                    Humidity
                </label>
                <label>
                    <input
                        name="pressure"
                        type="checkbox"
                        checked={checked.pressure}
                        onChange={handleCheckboxChange}
                    />
                    Pressure
                </label>
                <label>
                    <input
                        name="temperature"
                        type="checkbox"
                        checked={checked.temperature}
                        onChange={handleCheckboxChange}
                    />
                    Temperature
                </label>
            </div>
            <div className="dataGraph__graph">
                <Line data={dataGraphData} />
            </div>
        </div>
    );
}
export default DataGraph;
