import React from "react";

import Realtime from "./main-content/Realtime";
import Forecast from "./main-content/Forecast";
import './Main.css';

import { useContext } from "react";
import { ImperialContext } from "../ImperialContext";


function Main(props) {
    console.log(props.currentTab)
    const [tab, changeTab] = React.useState( (<Realtime info={props.info}/>) )
    const [info, rerenderInfo] = React.useState(props.info)

    const isImperial = useContext(ImperialContext)

    function switchImperial() {
        changeIsImperial(prevIsImperial => !prevIsImperial)
    }

    console.log(props)
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
        }
    }, [props])
    return (
        <main className="app-main">
            {tab}
        </main>
    )
}

export default Main;