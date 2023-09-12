import React from "react";
import './AirQuality.css';

function AirQuality(props) {
    console.log(props)

    const todayDate = props.info.current.last_updated;
    const slicedDate = todayDate.slice(todayDate.indexOf('-') + 1, todayDate.indexOf(' '))
    return (
        <div className="weather-container weather-air-container">
            <div className="air-container-left weather-container-part">
                <div className="container-left-title">
                    <h1 className="left-title-text font-label font-regular">
                        AIR QUALITY
                    </h1>
                    <p className="left-title-date font-button font-regular">Day: 
                    <span className="title-date-actual font-bold"> {slicedDate}</span></p>
                </div>
            </div>
            <div className="air-container-right weather-container-part"></div>
        </div>
    )
}

export default AirQuality;