import React from "react";
import './HIghestTemp.css';

function HighestTemp(props) {
    const {day, astro, date} = props.forecastDay;
    const {condition} = day;

    let tempDOM = (
        <div className="peek-temp-numbers">
            <h1 className="temp-numbers temp-numbers-maxmin">
                {props.isImperial ? day.maxtemp_f : day.maxtemp_c}
                °
                {props.isImperial ? "f" : "c"}
            </h1>
            <h2 className="temp-numbers temp-numbers-riseset font-regular">
                Sunrise: 
                <span> {astro.sunrise.slice(0, astro.sunrise.indexOf(" "))}
                    <span className="small-decimal">
                        {astro.sunrise.slice(astro.sunrise.indexOf(" ") + 1)}
                    </span>
                </span>
            </h2>
        </div>
        
    )
    if(!props.isMaximum) {
        tempDOM = (
            <div className="peek-temp-numbers">
                <h1 className="temp-numbers temp-numbers-maxmin">
                    {props.isImperial ? day.mintemp_f : day.mintemp_c}
                    °
                    {props.isImperial ? "f" : "c"}
                </h1>
                <h2 className="temp-numbers temp-numbers-riseset font-regular">
                    Sunset: 
                    <span> {astro.sunset.slice(0, astro.sunset.indexOf(" "))}
                        <span className="small-decimal">
                            {astro.sunset.slice(astro.sunset.indexOf(" ") + 1)}
                        </span>
                    </span>
                </h2>
            </div>
        )
    }

    return (
        <div className="peek-temp-container weather-container highest-temp-container">
            <div className="weather-container-part peek-container-left">
                <div className="peek-left-title">
                    <h1 className="left-title-text font-label font-regular">
                        TODAY'S  
                        {props.isMaximum ? " MAXIMUM" : " MINIMUM"}
                    </h1>
                </div>
                <div className="peek-left-content">
                    <img src={condition.icon}></img>
                    {tempDOM}
                </div>
            </div>
            <div className="weather-container-part peek-container-right">
                <h1 className="right-title-text font-label">
                    {date.slice(date.indexOf("-")+1)}
                </h1>
                <div className="peek-right-description">
                    <h1 className="right-description-text">
                        <span className="description-text-title font-regular">
                            {props.isMaximum ? "Day's average weather: " : "Night's average weather: "}
                        </span>
                        <p className="description-text-value font-bold">{condition.text}</p>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default HighestTemp;