import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Chicago",
    temperature: 55,
    date: "Thursday 10:00",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
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
              alt=""
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
            <h1 className="current-temp">{weatherData.temperature}</h1>
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
            <p className="humidity">{weatherData.humidity}%</p>
            <br />
            <img src="images/wind.png" alt="wind" className="small-icons" />
            <p className="wind">{weatherData.wind}mph</p>
          </div>
        </div>
        <div className="the-week" id="forecast"></div>
      </div>
      <footer>
        <a href="https://github.com/emeraz15/Weather-App" target="_blank">
          Open-source code
        </a>{" "}
        by Erika Meraz
        <div className="icon-attributions">
          Icons made by
          <a
            href="https://www.flaticon.com/authors/good-ware"
            title="Good Ware"
            target="_blank"
          >
            Good Ware
          </a>
          and
          <a
            href="https://www.flaticon.com/authors/mynamepong"
            title="mynamepong"
            target="_blank"
          >
            mynamepong
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </div>
  );
}
