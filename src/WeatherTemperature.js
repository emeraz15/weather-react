import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <h1 className="current-temp">{Math.round(props.fahrenheit)}</h1>
        <p className="degrees">
          <a href="/" id="fahrenheit-link">
            °F{" "}
          </a>
          |
          <a href="/" onClick={convertToCelsius} id="celsius-link">
            °C
          </a>
        </p>
      </div>
    );
  } else {
    let celsius = Math.round(((props.fahrenheit - 32) * 5) / 9);
    return (
      <div className="WeatherTemperature">
        <h1 className="current-temp">{Math.round(celsius)}</h1>
        <p className="degrees">
          <a href="/" onClick={convertToFahrenheit} id="fahrenheit-link">
            °F{" "}
          </a>
          |
          <a href="/" onClick={convertToCelsius} id="celsius-link">
            °C
          </a>
        </p>
      </div>
    );
  }
}
