import React from "react";
import './Searchbar.css';

import cities from "../data/cities";

function Searchbar(props) {
    
    const {changeLocation} = props
    const [place, setPlace] = React.useState('')
    
    const [searchMatchesDOM, changeSearchMatchesDOM] = React.useState([])

    function handleSearch(event) {
        setPlace(event.target.value)
        showMatches(event.target.value)
    }

    function createMatchesDOM(searchMatches) {
        changeSearchMatchesDOM(searchMatches.map((match, index) => {
            const style = {
                borderTop: index ? "1px solid rgba(68, 68, 68, 0.568)" : "none"
            }
            const searchMatchDOM = (
                <div
                key={index} 
                style={style} 
                className="results-box-element" 
                onClick={(event) => changeLocation(event, match.name)}>
                    <h2 className="box-element-name font-button">
                        {match.name}
                    </h2>
                    <h2 className="box-element-state font-button">
                        {match.code}
                    </h2>
                </div>
            )
            return searchMatchDOM;
        }))
    }

    function showMatches(search) {
        if(search.length >= 1){
            const searchMatches = cities.filter((city, index) => {
                return city.name.match(search)
            })
            createMatchesDOM(searchMatches)    
        }else{
            changeSearchMatchesDOM([])
        }
    }

    return (
        <div className="searchbar-container">
            <form className="search-form" onSubmit={(event) => changeLocation(event, place)}>
                <input 
                className="search-input font-button"
                placeholder="City"
                name="city"
                value={place}
                onChange={handleSearch}
                autoComplete="off"
                />
                <button className="search-button font-button">🔎</button>
                <section className="search-results-box">
                    {searchMatchesDOM}
                </section>
            </form>
        </div>
    )
}

export default Searchbar;