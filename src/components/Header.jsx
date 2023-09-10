import React from "react";
import logo from '../weather-logo.png'
import './Header.css';

function Header(props) {

    const {location, current, changeLocation} = props;

    const [tempFormat, changeTempFormat] = React.useState("temp_c")
    const [place, setPlace] = React.useState(location.name)

    function handleSearch(event) {
        setPlace(event.target.value)
    }

    return (
        <header className="app-header">
            <div className="header-logo">
                <img src={logo} />
                <h1 className="header-logo-text">
                    <span className="logo-yellow logo-initials">On</span>
                    <span className="logo-initials">W</span>eather</h1>
            </div>
            <div className="header-location">
                <h1 className="location-text">{location.name}, {location.country}</h1>
                <h1 className="location-tempo">, {current[tempFormat]}°
                {tempFormat === "temp_c" ? 'c' : 'F'}
                 </h1>
                
                <img src={current.condition.icon} />
            </div>
            <div className="header-search">
                <form className="search-form" onSubmit={(event) => changeLocation(event, place)}>
                    <input 
                    className="search-input"
                    placeholder="City"
                    name="city"
                    value={place}
                    onChange={handleSearch}
                     />
                    <button className="search-button">Search</button>
                </form>
            </div>
        </header>
    )
}

export default Header;