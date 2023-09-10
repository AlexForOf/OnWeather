import React from "react";
import './Navbar.css';
import navtabs from "../data/navtabs";

function Navbar(props) {
    const tabsDOM = navtabs.map((tab, index) => {
        return (
            tab === props.selectedTab ? 
            <a 
            key={index}
            onClick={(event) => props.switchTab(event, tab)}
            id={tab} 
            className="navbar-tab font-tab selected-tab">{tab}</a> : 
            <a 
            key={index}
            onClick={(event) => props.switchTab(event, tab)} 
            id={tab} 
            className="navbar-tab font-tab">{tab}</a>
        )
    })
    return (
        <nav className="app-navbar">
            {tabsDOM}
            <div className="nav-filler"></div>
        </nav>
    )
}

export default Navbar;