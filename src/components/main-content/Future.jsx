import React from "react";
import './Future.css';
import DailyBlock from "./unified-comp/DailyBlock";
import HourlyDailyBlock from "./unified-comp/HourlyBlock";

function Future(props) {
    const {forecastday} = props.info.forecast

    const [dailyBlocks, changeDailyBlocks] = React.useState([])
    const [isReturned, switchIsReturned] = React.useState(true)

    function showHours(event, info) {
        const {hour} = info;
        
        const createdBlocks = hour.map((oneHour, index) => {
            return <HourlyDailyBlock
                    key={index}
                    info={oneHour} 
                    isImperial={props.isImperial}
                    />
        })

        changeDailyBlocks(createdBlocks)
        switchIsReturned(false)
    }

    function showDays() {
        const dailyBlocksDOM = forecastday.map((oneDay, index) => {
            return <DailyBlock 
                key={index}
                info={oneDay}
                isImperial={props.isImperial} 
                showHours={showHours}
                />
        })
        changeDailyBlocks(dailyBlocksDOM)
        switchIsReturned(true)
    }


    React.useEffect(() => {
        showDays()
    }, [])

    


    return (
        <div className="container-future">
            {!isReturned && 
                <div className="future-return">
                    <h3 className="top-right-gotodetails return-arrow" onClick={showDays}>⮕</h3>
                </div>
            }
            {dailyBlocks}
        </div>
    )   
}

export default Future;