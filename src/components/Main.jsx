import React from "react";

import Realtime from "./main-content/Realtime";
import Forecast from "./main-content/Forecast";
import Future from "./main-content/Future";
import './Main.css';

import dailyResponse from '../data/dailyResponse.json'

import { useContext } from "react";
import { ImperialContext } from "../ImperialContext";


function Main(props) {
    const [tab, changeTab] = React.useState( (<Realtime info={props.info}/>) )

    const isImperial = useContext(ImperialContext)

    function switchImperial() {
        changeIsImperial(prevIsImperial => !prevIsImperial)
    }

    React.useEffect(() => {
        if (props.currentTab === "Realtime") {
            changeTab(<Realtime 
                info={props.info}
                isImperial={isImperial} 
                switchIsImperial={switchImperial}
                />)
        }else if (props.currentTab === "Forecast") {
            changeTab(<Forecast 
                info={props.info}
                isImperial={isImperial} 
                switchIsImperial={switchImperial}
                />)
        }else if (props.currentTab === "Future") {
            changeTab(<Future 
                info={props.info}
                isImperial={isImperial} 
                switchIsImperial={switchImperial}
                />)
        }
    }, [props])
    return (
        <main className="app-main">
            {tab}
        </main>
    )
}

export default Main;