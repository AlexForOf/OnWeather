import React from "react";
import './AirQuality.css';

function AirQuality(props) {
    console.log(props)

    const todayDate = props.info.current.last_updated;
    const slicedDate = todayDate.slice(todayDate.indexOf('-') + 1, todayDate.indexOf(' '))

    const {air_quality} = props.info.current

    console.log(air_quality)
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
                        <h1 className="chart-actual-placeholder">Here goes chart</h1>
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