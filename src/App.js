import React from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import WeatherDisplay from "./components/WeatherDisplay";

import styles from "./App.module.css";

const apiKey = "3b7d809c96fa7470bc1fd65d0b24df26";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      iconId: null,
      weather: null,
      temp: null,
      minTemp: null,
      maxTemp: null,
      alertShow: false
    }
  };

  resetState = () => {
    this.setState({
      location: null,
      iconId: null,
      weather: null,
      temp: null,
      minTemp: null,
      maxTemp: null
    }) 
  };

  getLocation = (e) => {
    e.preventDefault();
    if (document.getElementById("cityName").value === "") {
      this.alertGen("Please enter a location.");
    } else {
      this.setState({location: document.getElementById("cityName").value});
    }    
  };

  alertGen = (msg) => {
    this.setState({alertShow: true});
    setTimeout(() => {
      this.setState({alertShow:false});
    }, 5000)
    document.getElementById("errorBox").innerHTML = msg;
  }

  toogleAlert = () => {
    return {
      display: this.state.alertShow ? "flex" : "none"
    }
  };

  componentDidUpdate(prevProps ,prevState) {
    if (this.state.location !== prevState.location) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&units=metric&appid=${apiKey}`)
      .then(res => {
          if (res.status === 404) {
            this.resetState();
            var e = new Error("Location Not Found. Please try again.");
            throw e;
          } else {
              return res.json();
          }
      })
      .then(res => {
        this.setState({
          weather: res.weather[0].main,
          iconId: res.weather[0].icon,
          temp: res.main.temp + "°",
          minTemp: res.main.temp_min + "°",
          maxTemp: res.main.temp_max + "°"
        });
      })
      .catch((e) => {
        console.log(e)
        this.alertGen(e.message)
      })
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className={styles.imgContainer}>
          <div className={styles.layer}></div>
        </div>
        <Form getLocation={this.getLocation}/>
        <div id="errorBox" className={`${styles.alert}`} style={this.toogleAlert()}></div>
        <WeatherDisplay weatherInfo={this.state} />  
      </React.Fragment>
    )
  }
};

export default App;
