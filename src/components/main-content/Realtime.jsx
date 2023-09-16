import React from "react";

import WeatherCurrent from "./realtime-comp/WeatherCurrent";
import AirQuality from "./realtime-comp/AirQuality";

import HighestTemp from "./realtime-comp/HighestTemp";
import './Realtime.css';

import findAverageNightWeather from "./averageFunction";

function Realtime(props) {
    const forecastDay = props.info.forecast.forecastday[0];
    const {hour} = forecastDay;
    const avgNightCondition = findAverageNightWeather(hour);

    return (
        <div className="container-weather">
            <div className="weather-two-parts weather-upper">
                <WeatherCurrent 
                info={props.info} 
                isImperial={props.isImperial}
                switchIsImperial={props.switchIsImperial}
                />
                <AirQuality 
                info={props.info}
                isImperial={props.isImperial}
                switchIsImperial={props.switchIsImperial}
                />
            </div>
            <div className="weather-two-parts weather-middle">
                <HighestTemp 
                isImperial={props.isImperial}
                isMaximum={true}
                forecastDay={forecastDay}
                />
                <HighestTemp 
                isImperial={props.isImperial}
                isMaximum={false}
                forecastDay={forecastDay}
                />
            </div>
        </div>
    )
}

export default Realtime;