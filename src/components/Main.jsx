import React from "react";

import Realtime from "./main-content/Realtime";
import './Main.css';


function Main(props) {
    const [tab, changeTab] = React.useState( (<Realtime />) )
    React.useEffect(() => {
        if (props.currentTab === "Realtime") {
            changeTab(<Realtime />)
        }else if (props.currentTab === "Forecast") {

        }
    }, [])
    return (
        <main className="app-main">
            {tab}
        </main>
    )
}

export default Main;