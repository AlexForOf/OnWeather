import React from "react";
import './Forecast.css';
import HourlyDailyBlock from "./unified-comp/HourlyBlock";

function Forecast(props) {
    const hours = props.info.forecast.forecastday[0].hour;
    const curDate = new Date(props.info.location.localtime);
    
    const filteredHours = hours.filter((hour) => {
        const gotHours = new Date(hour.time)
        return gotHours.getHours() >= curDate.getHours() 
    })

    const createdBlocks = filteredHours.map((hour, index) => {
        return (<HourlyDailyBlock 
            key={index}
            info={hour} 
            alerts={props.info.alerts}
            isImperial={props.isImperial}
            />)
    })
    
    return (
        <div className="container-forecast">
            {createdBlocks}
        </div>
    )
}

export default Forecast;