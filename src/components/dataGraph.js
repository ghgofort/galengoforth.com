/**
 * @fileoverview  This file contains the DataGraph component. This component is
 * responsible for rendering each field from the HPT readings in a graph. Each
 * field has a checkbox that allows the user to toggle the field on and off.
 */

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto";
import './dataGraph.css';

function DataGraph(props) {
    console.log(props);
    const [humidityData, setHumidityData] = useState([]);
    const [temperatureData, setTemperatureData] = useState([]);
    const [pressureData, setPressureData] = useState([]);
    const [labels, setLabels] = useState([]);
    
    useEffect(() => {
        // Format the dat for the graph.
        let lastDateString = '';
        const hData = [];
        const pData = [];
        const tData = [];
        const lbls = [];
        if ('apiResponse' in props && props.apiResponse.length) {
            props.apiResponse.reverse().forEach((item) => {
                if (item.date !== lastDateString) {
                    lbls.push(item.date + ' ' + item.time);
                    lastDateString = item.date;
                } else {
                    lbls.push(item.time);
                }
                hData.push(item.humidity);
                pData.push(item.pressure_inHg);
                tData.push(item.temperature_F);
            });
        }

        setHumidityData(hData);
        setPressureData(pData);
        setTemperatureData(tData);
        setLabels(lbls);
    }, [props, props.apiResponse]);

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
                data: humidityData,
                label: 'Humidity',
                fill: false,
                borderColor: 'rgb(15, 192, 192)',
                tension: 0.1
            },
            {
                data: pressureData,
                label: 'Pressure',
                fill: false,
                borderColor: 'rgb(255, 33, 200)',
                tension: 0.1
            },
            {
                data: temperatureData,
                label: 'Temperature',
                fill: false,
                borderColor: 'rgb(32,255,0)',
                tension: 0.1
            }
        ]
    };



    return (
        <div className="dataGraph__component">
            <div className="dataGraph__graph">
                <h3>Temp, Pressure, & Humidity Graph</h3>
                <Line data={dataGraphData} options={dataGraphOptions} updateMode="resize" />
            </div>
        </div>
    );
}
export default DataGraph;
