import React from "react";
import './Forecast.css';
import HourlyDailyBlock from "./unified-comp/HourlyDailyBlock";

function Forecast(props) {

    const hours = props.info.forecast.forecastday[0].hour;
    const curDate = new Date();
    const filteredHours = hours.filter((hour) => {
        const gotHours = new Date(hour.time)
        return gotHours.getHours() >= curDate.getHours() 
    })

    const createdBlocks = filteredHours.map((hour) => {
        return (<HourlyDailyBlock info={hour} alerts={props.info.alerts}/>)
    })

    console.log(props)
    return (
        <div className="container-forecast">
            {createdBlocks}
        </div>
    )
}

export default Forecast;