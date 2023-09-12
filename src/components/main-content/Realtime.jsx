import React from "react";
import WeatherCurrent from "./WeatherCurrent";
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
                <div className="weather-container weather-air-container">
                    <div className=""></div>
                </div>
            </div>
        </div>
    )
}

export default Realtime;