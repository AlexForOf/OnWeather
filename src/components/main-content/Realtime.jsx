import React from "react";

import WeatherCurrent from "./realtime-comp/WeatherCurrent";
import AirQuality from "./realtime-comp/AirQuality";

import './Realtime.css';

function Realtime(props) {
    const [isImperial, changeIsImperial] = React.useState(false)

    function switchIsImperial() {
        changeIsImperial(prevIsImperial => !prevIsImperial)
    }

    console.log("rerendered")

    return (
        <div className="container-weather">
            <div className="weather-upper">
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
        </div>
    )
}

export default Realtime;