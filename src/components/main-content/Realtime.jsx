import React from "react";

import WeatherCurrent from "./realtime-comp/WeatherCurrent";
import AirQuality from "./realtime-comp/AirQuality";

import HighestTemp from "./realtime-comp/HighestTemp";
import LowestTemp from "./realtime-comp/LowestTemp";
import './Realtime.css';

import findAverageNightWeather from "./averageFunction";

function Realtime(props) {
    const [isImperial, changeIsImperial] = React.useState(false)

    function switchIsImperial() {
        changeIsImperial(prevIsImperial => !prevIsImperial)
    }

    const forecastDay = props.info.forecast.forecastday[0];
    const {hour} = forecastDay;
    const avgNightCondition = findAverageNightWeather(hour);

    return (
        <div className="container-weather">
            <div className="weather-two-parts weather-upper">
                <WeatherCurrent 
                info={props.info} 
                isImperial={isImperial}
                switchIsImperial={switchIsImperial}
                />
                <AirQuality 
                info={props.info}
                isImperial={isImperial}
                switchIsImperial={switchIsImperial}
                />
            </div>
            <div className="weather-two-parts weather-middle">
                <HighestTemp 
                isImperial={isImperial} 
                isMaximum={true}
                forecastDay={forecastDay}
                />
                <HighestTemp 
                isImperial={isImperial} 
                isMaximum={false}
                forecastDay={forecastDay}
                />
            </div>
        </div>
    )
}

export default Realtime;