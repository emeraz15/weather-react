import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: "Thursday 10:00",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form id="city-form">
            <div className="row city-form">
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  id="input-city"
                  placeholder="Enter City"
                  autoComplete="off"
                />
              </div>
              <div className="col-1">
                <button type="submit" className="btn btn-light">
                  Search
                </button>
              </div>
              <div className="col-1">
                <button type="submit" className="btn btn-info" id="current-btn">
                  Current
                </button>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-4">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="current-day"
                id="icon"
              />
            </div>

            <div className="col-4 current-city">
              <img
                src="images/location.png"
                alt="location"
                className="location-pin"
              />
              <h1 className="location">{weatherData.city}</h1>
              <br />
              <p className="date">{weatherData.date}</p>
              <h1 className="current-temp">
                {Math.round(weatherData.temperature)}
              </h1>
              <p className="degrees">
                <a href="/" id="fahrenheit-link">
                  °F{" "}
                </a>
                |
                <a href="/" id="celsius-link">
                  °C
                </a>
              </p>
            </div>

            <div className="col-4 current-stats">
              <img
                src="images/humidity.png"
                alt="humidity"
                className="small-icons"
              />
              <p className="humidity">{Math.round(weatherData.humidity)}%</p>
              <br />
              <img src="images/wind.png" alt="wind" className="small-icons" />
              <p className="wind">{Math.round(weatherData.wind)}mph</p>
            </div>
          </div>
          <div className="the-week" id="forecast"></div>
        </div>
        <footer>
          <a
            href="https://github.com/emeraz15/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Erika Meraz
          <div className="icon-attributions">
            Icons made by
            <a
              href="https://www.flaticon.com/authors/good-ware"
              title="Good Ware"
              target="_blank"
              rel="noreferrer"
            >
              Good Ware
            </a>
            and
            <a
              href="https://www.flaticon.com/authors/mynamepong"
              title="mynamepong"
              target="_blank"
              rel="noreferrer"
            >
              mynamepong
            </a>
            from
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              target="_blank"
              rel="noreferrer"
            >
              www.flaticon.com
            </a>
          </div>
        </footer>
      </div>
    );
  } else {
    let apiKey = "5d8667ee7b2450bd924cdffccf269c9a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
