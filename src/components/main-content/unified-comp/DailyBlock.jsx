import React from "react";
import './DailyBlock.css';

function DailyBlock({info, isImperial, showHours}) {

    const weekDays = [
        "MO", "TU", "WE", "TH", "FR", "SA", "SU"
    ]


    const {day, astro, date} = info

    const {maxtemp_c, maxtemp_f, mintemp_c, mintemp_f,
           maxwind_kph, maxwind_mph,
           avgtemp_c, avgtemp_f, avghumidity, 
           avgvis_km, avgvis_miles,
           condition} = day

    const dateDay = date.slice(date.indexOf('-') + 1).replace('-', '/')

    const weekDay = weekDays[new Date(date).getDay()]

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
                                <h1 className="weather-info-container-temp">
                                    {isImperial ? `${maxtemp_f}°f` : `${maxtemp_c}°c`}/
                                </h1>
                                <h3 className="min-temp">
                                    {isImperial ? `${mintemp_f}°f` : `${mintemp_c}°c`}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-top-right">
                    <h3 className="top-right-gotodetails" onClick={(event) => showHours(event, info)}>⮕</h3>
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
                <h3 className="hourly-text container-bottom-title">Details</h3>
                <section className="container-bottom-grid">
                    <div className="daily-container-bottom-element">
                        <h3 className="hourly-text bottom-element-title font-regular">
                            Temperature:
                        </h3>
                        <h2 className="hourly-text bottom-element-value">
                            {isImperial ? `${avgtemp_f}°f` : `${avgtemp_c}°c`}
                        </h2>
                    </div>
                    <div className="daily-container-bottom-element">
                        <h3 className="hourly-text bottom-element-title font-regular">
                            Humidity:
                        </h3>
                        <h2 className="hourly-text bottom-element-value">
                            {avghumidity}%
                        </h2>
                    </div>
                    <div className="daily-container-bottom-element">
                        <h3 className="hourly-text bottom-element-title font-regular">
                            Wind speed:
                        </h3>
                        <h2 className="hourly-text bottom-element-value">
                            {isImperial ? `${maxwind_mph} m/h` : `${maxwind_kph} km/h`}
                        </h2>
                    </div>
                    <div className="daily-container-bottom-element">
                        <h3 className="hourly-text bottom-element-title font-regular">
                            Vis:
                        </h3>
                        <h2 className="hourly-text bottom-element-value">
                            {isImperial ? `${avgvis_miles} m/h` : `${avgvis_km} km/h`}
                        </h2>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DailyBlock;