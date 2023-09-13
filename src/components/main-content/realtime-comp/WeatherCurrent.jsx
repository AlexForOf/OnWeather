import React from "react";
import './WeatherCurrent.css';

function WeatherCurrent(props) {
    console.log(props)
    const { 
        last_updated,
        temp_c, 
        temp_f, 
        feelslike_c, 
        feelslike_f,
        humidity,
        wind_kph,
        wind_mph,
        pressure_in,
        pressure_mb,
        gust_kph,
        gust_mph,
        wind_dir} = props.info.current;

    const {text, icon} = props.info.current.condition;
    const timeNow = last_updated.slice(last_updated.indexOf(' '))

    let isImperial = props.isImperial;

    return (
        <div className="weather-container weather-current-container">
            <div className="current-container-left container-part-left weather-container-part">
                        <div className="left-current-time">
                            <h1 className="time-label font-label">CURENT WEATHER</h1>
                            <p className="time-lastUPD font-button">
                                Last updated: <span className="the-time">{timeNow}</span>
                            </p>
                        </div>
                        <div className="left-current-temp">
                            <div className="current-temp-inner">
                            <img src={icon} />
                            <div className="current-temp-numbers">
                                <h1
                                onClick={props.switchIsImperial} 
                                className="temp-numbers-main">
                                    {isImperial ? temp_f : temp_c}°
                                    <span className="temp_system">{isImperial ? "f" : "c"}</span>
                                </h1>
                                <h2 className="temp-numbers-feel">
                                    Feels like: {isImperial ? feelslike_f : feelslike_c}°
                                    <span className="temp_system">{isImperial ? "f" : "c"}</span>
                                </h2>
                            </div>
                            </div>
                            
                        </div>
                        <h2 className="left-current-condition font-label">{text}</h2>
                    </div>
                    <div className="current-container-right weather-container-part">
                        <h1 className="right-title-text font-label">DETAILS</h1>
                        <div className="right-details-list">
                            <div className="details-list-element">
                                <span className="list-element-title font-content">Pressure:</span>
                                <span className="list-element-value font-title">
                                    {isImperial ? `${pressure_in} in` : `${pressure_mb} mB`}
                                </span>
                            </div>
                            <div className="details-list-element">
                            <span className="list-element-title font-content">Humidity:</span>
                                <span className="list-element-value font-title">
                                    {humidity}%
                                </span>
                            </div>
                            <div className="details-list-element">
                            <span className="list-element-title font-content">Wind:</span>
                                <span className="list-element-value font-title">
                                    <span className="list-wind-direction">
                                        {wind_dir} 
                                    </span> {isImperial ? `${wind_mph} m/h` : `${wind_kph} km/h`}
                                </span>
                            </div>
                            <div className="details-list-element last-list-element">
                            <span className="list-element-title font-content">Wind gusts:</span>
                                <span className="list-element-value font-title">
                                    {isImperial ? `${gust_mph} m/h` : `${gust_kph} km/h`}
                                </span>
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default WeatherCurrent;