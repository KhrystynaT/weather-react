import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="main">
        <div className="row">
          <div className="col-sm-5 d-flex justify-content-start align-items-center">
            <div>
              <h1>{props.data.city}</h1>
              <FormattedDate date={props.data.date} />
            </div>
          </div>
          <div className="col-sm-4 d-flex justify-content-end align-items-center text-center">
            <WeatherTemperature celcius={props.data.temperature} />
          </div>
        </div>

        <div className="row">
          <div className="weather_description mt-3">
            <div className="col-9  mob-d d-flex flex-direction-column justify-content-start align-items-center text-center">
              <ul>
                <li>
                  Pressure
                  <p className="bold  pt-2"> {props.data.pressure} </p>
                </li>
                <li>
                  Humidity:
                  <p className="bold  pt-2"> {props.data.humidity}%</p>
                </li>
                <li>
                  Wind:
                  <p className="bold  pt-2"> {props.data.wind}km/h</p>
                </li>
              </ul>
            </div>
            <div className="col-3 d-flex flex-direction-column justify-content-start align-items-center text-center">
              <p className="info text-capitalize">{props.data.description}</p>
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                width="100px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
