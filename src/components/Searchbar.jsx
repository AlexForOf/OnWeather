import React from "react";
import './Searchbar.css';

/* Deprecated

import cities from "../data/cities";

*/

function Searchbar(props) {
    
    const {changeLocation} = props

    const [place, setPlace] = React.useState('')
    
    const [searchMatchesDOM, changeSearchMatchesDOM] = React.useState([])

    function handleSearch(event) {
        setPlace(event.target.value)
        showMatches(event.target.value)
    }

    function handleSubmit(event, location) {
        changeLocation(event, location)
        setPlace('')
        changeSearchMatchesDOM([])
    }

    function createMatchesDOM(searchMatches) {
        changeSearchMatchesDOM(searchMatches.map((match, index) => {
            const style = {
                borderTop: index ? "1px solid rgba(68, 68, 68, 0.568)" : "none"
            }
            const searchMatchDOM = (
                <button
                key={index} 
                style={style} 
                className="results-box-element" 
                onClick={() => setPlace(match.name)}
                >
                    <h2 className="box-element-name font-button">
                        {match.name}
                    </h2>
                    <h2 className="box-element-state font-button">
                        {match.country}
                    </h2>
                </button>
            )
            return searchMatchDOM;
        }))
    }

    async function showMatches(search) {
        if(search.length > 2) {

        fetch(`https://api.api-ninjas.com/v1/city?name=${search}&min_population=50000&limit=5`,
            {
                headers: {
                    'X-Api-Key': import.meta.env.VITE_CITIES_API_KEY
                }
            }
        )
        .then(response => response.json())
        .then(data => {
            createMatchesDOM(data)    
        })   
        
    }else{
        changeSearchMatchesDOM([])
    }
    }

    return (
        <div className="searchbar-container">
            <form className="search-form" onSubmit={(event) => handleSubmit(event, place)}>
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