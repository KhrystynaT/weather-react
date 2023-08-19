import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <h2 className="temp">
        {Math.round(props.celcius)}
        <span className="small">°C</span>
      </h2>
    </div>
  );
}
