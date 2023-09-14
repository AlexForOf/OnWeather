import React from "react";
import logo from '../images/weather-logo.png'
import { useContext } from "react";
import { ImperialContext } from "../ImperialContext";
import './Header.css';

function Header(props) {

    const {location, current, changeLocation} = props;

    const [tempFormat, changeTempFormat] = React.useState("temp_c")
    const [place, setPlace] = React.useState(location.name)

    function handleSearch(event) {
        setPlace(event.target.value)
    }
    function switchFormatTempo(event) {
        changeTempFormat(prevTempFormat => {
            return (tempFormat === "temp_c" ? "temp_f" : "temp_c")
        })
    }

    return (
        <div className="header-outer">
            <header className="app-header">
                <div className="header-logo">
                    <img src={logo} />
                    <h1 className="header-logo-text font-logo">
                        <span className="logo-yellow logo-initials">On</span>
                        <span className="logo-initials">W</span>eather
                    </h1>
                </div>
                <div className="header-location">
                    <h1 className="location-text font-large">{location.name}<span className="location-country">, {location.country}</span></h1>
                    <h1 onClick={props.switchIsImperial} className="location-tempo font-large">
                        , <span className="tempo-switch-system">{
                            useContext(ImperialContext) ? current.temp_f : current.temp_c
                        }°
                    {useContext(ImperialContext) ? 'f' : 'c'}</span>
                    </h1>
                    <img src={current.condition.icon} />
                </div>
                <div className="header-search">
                    <form className="search-form" onSubmit={(event) => changeLocation(event, place)}>
                        <input 
                        className="search-input font-button"
                        placeholder="City"
                        name="city"
                        value={place}
                        onChange={handleSearch}
                        />
                        <button className="search-button font-button">🔎</button>
                    </form>
                </div>
            </header>
        </div>
        
    )
}

export default Header;