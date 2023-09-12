import React from "react";

import Realtime from "./main-content/Realtime";
import './Main.css';


function Main(props) {
    const [tab, changeTab] = React.useState( (<Realtime info={props.info}/>) )
    const [info, rerenderInfo] = React.useState(props.info)
    console.log(props)
    React.useEffect(() => {
        if (props.currentTab === "Realtime") {
            changeTab(<Realtime info={props.info}/>)
        }else if (props.currentTab === "Forecast") {

        }
    }, [props.info])
    return (
        <main className="app-main">
            {tab}
        </main>
    )
}

export default Main;