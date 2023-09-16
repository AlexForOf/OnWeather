import React from "react";
import './DailyBlock.css';

function DailyBlock({info, isImperial}) {
    console.log(info)

    const weekDays = [
        "MO", "TU", "WE", "TH", "FR", "SA", "SU"
    ]


    const {day, astro, date} = info

    const {maxtemp_c, maxtemp_f, mintemp_c, mintemp_f,
           maxwind_kph, maxwind_mph, totalsnow_cm,
           avgtemp_c, avgtemp_f, avghumidity, 
           avgvis_km, avgvis_miles,
           condition} = day

    const dateDay = date.slice(date.indexOf('-') + 1).replace('-', '/')

    const weekDay = weekDays[new Date(date).getDay()]
    console.log(weekDay)

    return (
        <div className="daily-container">
            <div className="daily-container-top">
                <div className="container-top-left">
                    <div className="top-left-date">
                        <h3 className="left-date-day">{dateDay}</h3>
                        <h2 className="left-date-week">{weekDay}</h2>
                    </div>
                    <div className="top-left-weather">
                        <img src={condition.icon} className="left-weather-icon"/>
                        <div className="left-weather-info-container">
                            <div className="info-container-minmax-temp">
                                <h1 className="weather-info-container-temp">{maxtemp_c}°c/</h1>
                                <h3 className="min-temp">{mintemp_c}°c</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-top-right">
                    <h3 className="top-right-gotodetails">⮕</h3>
                </div>
            </div>
            <div className="daily-container-middle">
                <h3 className="container-middle-astrology-title">Astronomy</h3>
                <section className="container-middle-astrology">
                    <div className="middle-astrology-left">
                        <div className="astrology-stickers-container">
                            <h1 className="astrology-stickers">🌇</h1>
                            <div>
                                <h2 className="astrology-title">Sunrise: </h2>
                                <h2 className="astrology-text">
                                    {astro.sunrise.slice(0, astro.sunrise.indexOf(' '))}
                                    <span className="astrology-ampm small-decimal">
                                        {astro.sunrise.slice(astro.sunrise.indexOf(' ') + 1)}
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="middle-astrology-middle">
                        <div className="astrology-stickers-container container-center">
                            <h1 className="astrology-stickers">🌆</h1>
                            <div>
                                <h2 className="astrology-title">Sunset: </h2>
                                <h2 className="astrology-text">
                                    {astro.sunset.slice(0, astro.sunset.indexOf(' '))}
                                    <span className="astrology-ampm small-decimal">
                                        {astro.sunset.slice(astro.sunset.indexOf(' ') + 1)}
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="middle-astrology-right container-right">
                        <div className="astrology-stickers-container ">
                            <h1 className="astrology-stickers">🌚</h1>
                            <div>
                                <h2 className="astrology-title">Moon phase: </h2>
                                <h2 className="astrology-text moon-phase">
                                    {astro.moon_phase}
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="daily-container-bottom">
                
            </div>
        </div>
    )
}

export default DailyBlock;