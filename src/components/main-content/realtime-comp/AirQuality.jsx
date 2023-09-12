import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

import './AirQuality.css';

function AirQuality(props) {

    
    
    const todayDate = props.info.current.last_updated;
    const slicedDate = todayDate.slice(todayDate.indexOf('-') + 1, todayDate.indexOf(' '))

    const {air_quality} = props.info.current

    const test = Object.values(air_quality)

    console.log(test)
    
    const chartLabels = {
        labels: ["CO", "NO2", "O3", "SO2", "PM10", "PM2.5"],
        datasets: [
            {
                label: "Coef. of matter",
                data: Object.values(air_quality),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 153, 0, 0.2)',
                  'rgb(153, 204, 255, 0.2)',

                ],
                borderColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 153, 0, 0.2)',
                  'rgb(153, 204, 255, 0.2)',
                ],
                borderWidth: 1
            }
        ]
    }

    chartLabels.datasets.data = test;

    return (
        <div className="weather-container weather-air-container">
            <div className="air-container-left container-part-left weather-container-part">
                <div className="container-left-title">
                    <h1 className="left-title-text font-label font-regular">
                        AIR QUALITY
                    </h1>
                    <p className="left-title-date font-button font-regular">Day: 
                    <span className="title-date-actual font-bold"> {slicedDate}</span></p>
                </div>
                <div className="container-left-chart">
                    <div className="left-chart-actual">
                        <Doughnut data={chartLabels} />
                        {/* <h1 className="chart-actual-placeholder">Here goes chart</h1> */}
                    </div>
                </div>
                <div className="container-left-description">
                    <h3 className="left-description-text font-label font-regular">AQI Chart</h3>
                </div>
            </div>
            <div className="air-container-right weather-container-part">
                <h1 className="right-title-text font-label">PARAMETERS</h1>
                <div className="right-details-list">
                    <div className="details-list-element">
                        <span className="list-element-title font-content">NO<span className="small-decimal">2</span></span>
                        <span className="list-element-value font-title">
                            {air_quality.no2}
                        </span>
                    </div>
                    <div className="details-list-element">
                        <span className="list-element-title font-content">PM<span className="small-decimal">10</span></span>
                        <span className="list-element-value font-title">
                            {air_quality.pm10}
                        </span>
                    </div>
                    <div className="details-list-element">
                        <span className="list-element-title font-content">O<span className="small-decimal">3</span></span>
                        <span className="list-element-value font-title">
                            {air_quality.o3}
                        </span>
                    </div>
                    <div className="details-list-element">
                        <span className="list-element-title font-content">PM<span className="small-decimal">2.5</span></span>
                        <span className="list-element-value font-title">
                            {air_quality.pm2_5}
                        </span>
                    </div>
                    <div className="details-list-element last-list-element">
                        <span className="list-element-title font-content">CO</span>
                        <span className="list-element-value font-title">
                            {air_quality.co}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirQuality;