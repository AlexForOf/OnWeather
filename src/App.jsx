import './App.css';
import React from 'react';
import data from './data/data';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {

  const [selectedTab, changeSelectedTab] = React.useState("Realtime")
  const [weatherResponse, changeWeatherResonse] = React.useState(data)
  const [userData, changeUserData] = React.useState({
    q: "London",
    lang: "en"    
  })

  React.useEffect(() => {
    console.log("Updated")
    // fetch(`https://api.weatherapi.com/v1/current.json?q=${userData.q}&lang=${userData.lang}&key=4c5ff613e6c54a329d6113323231009`)
    // .then(response => response.json())
    // .then(data => changeWeatherResonse(data))
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

  return (
    <div className='application'>
        <Header 
          location={weatherResponse.location} 
          current={weatherResponse.current}
          changeLocation={changeLocation}
        />
        <Navbar selectedTab={selectedTab} switchTab={switchTab}/>
        <Main currentTab={selectedTab}/>
    </div>
  )
}

export default App