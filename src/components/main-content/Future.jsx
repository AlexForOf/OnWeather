import React from "react";
import './Future.css';
import DailyBlock from "./unified-comp/DailyBlock";

function Future(props) {
    const {forecastday} = props.info.forecast
    console.log(forecastday)

    function showHours(event, info) {
        console.log(info)
    }

    const dailyBlocks = forecastday.map((oneDay, index) => {
        return <DailyBlock 
            key={index}
            info={oneDay}
            isImperial={props.isImperial} 
            showHours={showHours}
            />
    })
    return (
        <div className="container-future">
            {dailyBlocks}
        </div>
    )   
}

export default Future;