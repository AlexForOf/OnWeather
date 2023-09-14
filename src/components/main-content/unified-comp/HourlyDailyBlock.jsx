import React from "react";
import './HourlyDailyBlock.css'

function HourlyDailyBlock(props) {

    console.log(props.info)

    const {isImperial} = props;

    const [isVisibleDetails, changeIsVisibleDetails] = React.useState(false)

    const {text, icon} = props.info.condition;
    const {temp_c, temp_f, time, wind_kph, wind_mph,
           heatindex_c, heatindex_f, humidity, pressure_in, pressure_mb,
           vis_km, vis_miles, chance_of_rain, chance_of_snow, 
           windchill_c, windchill_f, wind_degree, wind_dir} = props.info;

    const date = time.slice(0, time.indexOf(" "))
    const hour = time.slice(time.indexOf(" ") + 1)

    function switchVisibleDetails() {
        changeIsVisibleDetails(prevIsVisibleDetails => !prevIsVisibleDetails)
    }

    // TODO:
    // Make alert block in order to display alerts
    const alertsBlocks = null;

    return (
        <div 
        className="hourly-dailyblock-container">
            <div 
            className="dailyblock-container-head"
            onClick={switchVisibleDetails}
            >
                <div className="container-head-left">
                    <div className="head-left-weather-container">
                        <img className="left-weather-icon" src={icon} />
                        <div className="left-weather-text-container">
                            <h1 className="hourdaily-text left-weather-tempo">
                                {isImperial ? `${temp_f}°f` : `${temp_c}°c`}
                            </h1>
                            <h3 className="hourdaily-text left-weather-text font-weather font-regular">
                                {text}
                            </h3>
                        </div>
                    </div>

                </div>
                <div className="container-head-right">
                    <h2 className="hourdaily-text head-right-time">{hour}</h2>
                    <h3 className="hourdaily-text head-right-date font-regular">{date}</h3>
                </div>
            </div>
            <div className="dailyblock-container-middle">
                {alertsBlocks}
            </div>
            <div className="dailyblock-container-bottom">
                <h3 className="hourdaily-text container-bottom-title">
                    Information                    
                </h3>
                <section className="container-bottom-grid container-bottom-main-info">
                    <div className="container-bottom-element bottom-element-first">
                        <h3 className="hourdaily-text bottom-element-title font-regular">
                            Wind speed:
                        </h3>
                        <h2 className="hourdaily-text bottom-element-value">
                            {isImperial ? `${wind_mph} m/h` : `${wind_kph} km/h`}
                        </h2>
                    </div>
                    <div className="container-bottom-element bottom-element-first">
                        <h3 className="hourdaily-text bottom-element-title font-regular">
                            Humidity:
                        </h3>
                        <h2 className="hourdaily-text bottom-element-value">
                            {humidity}%
                        </h2>
                    </div>
                    <div className="container-bottom-element">
                        <h3 className="hourdaily-text bottom-element-title font-regular">
                            Windchill:
                        </h3>
                        <h2 className="hourdaily-text bottom-element-value">
                            {isImperial ? `${windchill_f}°f` : `${windchill_f}°c`}
                        </h2>
                    </div>
                    <div className="container-bottom-element">
                        <h3 className="hourdaily-text bottom-element-title font-regular">
                            Wind:
                        </h3>
                        <h2 className="hourdaily-text bottom-element-value">
                            <span className="list-wind-direction">{wind_dir}</span> on degree {wind_degree}°
                        </h2>
                    </div>
                </section>
                {isVisibleDetails && 
                <section className="container-bottom-grid container-bottom-details-info">
                    <div className="container-bottom-element">
                        <h3 className="hourdaily-text bottom-element-title font-regular">
                            Chance of rain:
                        </h3>
                        <h2 className="hourdaily-text bottom-element-value">
                            {chance_of_rain}%
                        </h2>
                    </div>
                    <div className="container-bottom-element">
                        <h3 className="hourdaily-text bottom-element-title font-regular">
                            Chance of snow:
                        </h3>
                        <h2 className="hourdaily-text bottom-element-value">
                            {chance_of_snow}%
                        </h2>
                    </div>
                    <div className="container-bottom-element">
                        <h3 className="hourdaily-text bottom-element-title font-regular">
                            Heat index:
                        </h3>
                        <h2 className="hourdaily-text bottom-element-value">
                            {isImperial ? `${heatindex_f}°f` : `${heatindex_c}°c`}
                        </h2>
                    </div>
                    <div className="container-bottom-element">
                        <h3 className="hourdaily-text bottom-element-title font-regular">
                            Visibility:
                        </h3>
                        <h2 className="hourdaily-text bottom-element-value">
                            {isImperial ? `${vis_miles} m` : `${vis_km} km`}
                        </h2>
                    </div>
                    <div className="container-bottom-element">
                        <h3 className="hourdaily-text bottom-element-title font-regular">
                            Pressure:
                        </h3>
                        <h2 className="hourdaily-text bottom-element-value">
                            {isImperial ? `${pressure_in} in` : `${pressure_mb} mB`}
                        </h2>
                    </div>
                </section>
                }
            </div>
        </div>
    )
}

export default HourlyDailyBlock;