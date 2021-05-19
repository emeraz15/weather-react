import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <img
            src={props.data.imgUrl}
            alt={props.data.description}
            className="current-day"
            id="icon"
          />
        </div>

        <div className="col-4 current-city">
          <img src="./location.png" alt="location" className="location-pin" />
          <h1 className="location">{props.data.city}</h1>
          <br />
          <p className="date">
            <FormattedDate date={props.data.date} />
          </p>
          <h1 className="current-temp">{Math.round(props.data.temperature)}</h1>
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
          <img src="./humidity.png" alt="humidity" className="small-icons" />
          <p className="humidity">{Math.round(props.data.humidity)}%</p>
          <br />
          <img src="./wind.png" alt="wind" className="small-icons" />
          <p className="wind">{Math.round(props.data.wind)}mph</p>
        </div>
      </div>
      <div className="the-week" id="forecast"></div>
    </div>
  );
}
