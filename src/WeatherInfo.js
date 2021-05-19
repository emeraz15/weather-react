import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import location from "./location.png";
import humidity from "./humidity.png";
import wind from "./wind.png";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4 current-day" id="icon">
          <WeatherIcon code={props.data.icon} />
        </div>

        <div className="col-4 current-city">
          <img src={location} alt="location" className="location-pin" />
          <h1 className="location">{props.data.city}</h1>
          <br />
          <p className="date">
            <FormattedDate date={props.data.date} />
          </p>
          <WeatherTemperature fahrenheit={Math.round(props.data.temperature)} />
        </div>

        <div className="col-4 current-stats">
          <img src={humidity} alt="humidity" className="small-icons" />
          <p className="humidity">{Math.round(props.data.humidity)}%</p>
          <br />
          <img src={wind} alt="wind" className="small-icons" />
          <p className="wind">{Math.round(props.data.wind)}mph</p>
        </div>
      </div>
      <div className="the-week" id="forecast"></div>
    </div>
  );
}
