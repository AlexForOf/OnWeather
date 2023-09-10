import './App.css'
import React from 'react'
import data from './data'

import Header from './components/Header'

function App() {

  const [weatherResponse, changeWeatherResonse] = React.useState(data)
  const [userData, changeUserData] = React.useState({
    q: "London",
    lang: "en"    
  })

  React.useEffect(() => {
    console.log("Updated")
    fetch(`https://api.weatherapi.com/v1/current.json?q=${userData.q}&lang=${userData.lang}&key=4c5ff613e6c54a329d6113323231009`)
    .then(response => response.json())
    .then(data => changeWeatherResonse(data))
  }, [userData])
  console.log(userData)

  function changeLocation(event, location) {
    event.preventDefault();
    changeUserData(prevUserData => {
      return({
      ...prevUserData,
      ['q']: location
    })})
  }

  return (
    <div className='application'>
        <Header 
          location={weatherResponse.location} 
          current={weatherResponse.current}
          changeLocation={changeLocation}
        />
    </div>
  )
}

export default App
