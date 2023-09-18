import './App.css';
import React from 'react';

// Deprecated
import data from './data/data1';
import daily from './data/dailyResponse.json'

import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';

import { ImperialContext } from './ImperialContext';

function App() {

  const [selectedTab, changeSelectedTab] = React.useState("Realtime")
  const [isImperial, changeIsImperial] = React.useState(false)
  const [weatherResponse, changeWeatherResonse] = React.useState()
  const [isReadyDailyResponse, changeIsReadyDailyResponse] = React.useState(false)
  const [userData, changeUserData] = React.useState({
    q: "London",
    lang: "en",
    API_KEY: import.meta.env.VITE_WEATHER_API_KEY    
  })

  React.useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?q=${userData.q}&days=12&lang=${userData.lang}&alerts=yes&aqi=yes&key=${userData.API_KEY}`)
    .then((response) => {
      if(response.ok) return response.json()
      throw new Error(response.status)
    })
    .then((responseJSON) => {
      changeWeatherResonse(responseJSON)
      changeIsReadyDailyResponse(true)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [userData])
  

  function changeLocation(event, location) {
    event.preventDefault();
    changeUserData(prevUserData => {
      return({
      ...prevUserData,
      ['q']: location
    })})
  }

  function switchTab(event, id) {
    event.preventDefault();
    changeSelectedTab(id)
  }

  function switchIsImperial() {
    changeIsImperial(prevIsImperial => !prevIsImperial)
  }

  return (
    <div className='application'> 
    {isReadyDailyResponse &&
      <ImperialContext.Provider value={isImperial}>
        <Header 
          location={weatherResponse.location} 
          current={weatherResponse.current}
          changeLocation={changeLocation}
          switchIsImperial={switchIsImperial}
        />
        <Navbar 
          selectedTab={selectedTab} 
          switchTab={switchTab}
        />
        <Main 
          currentTab={selectedTab} 
          info={weatherResponse}
          dailyResponse={weatherResponse}
          userData={userData}
        />
      </ImperialContext.Provider>
}
    </div>
  )
}

export default App;
