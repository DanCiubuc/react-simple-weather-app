import React from "react";

import styles from "./WeatherDisplay.module.css";

class WeatherDisplay extends React.Component {
    render() {
        return(
            <div className={styles.weatherContainer}>
                <div className={styles.weatherLayer}></div>
                <h1 className={styles.weatherItems}>
                    {this.props.weatherInfo.location}
                </h1>
                <h1 className={styles.weatherItems}>
                    <img className={styles.weatherIcon} src={`http://openweathermap.org/img/wn/${this.props.weatherInfo.iconId}@2x.png`} alt=""/>
                </h1>
                <h1 className={styles.weatherItems}>
                    {this.props.weatherInfo.weather}
                </h1>
                <h1 className={styles.weatherItems}>
                    {this.props.weatherInfo.temp}
                </h1>
                <div className={styles.weatherFluctuation}>
                    <h1 className={styles.weatherItems}>
                        {this.props.weatherInfo.minTemp}
                    </h1>
                    <h1 className={styles.weatherItems}>
                        {this.props.weatherInfo.maxTemp}
                    </h1>
                </div>
            </div>
        )
    };
};

export default WeatherDisplay; 