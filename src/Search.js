import React from "react";
import WeatherImage from "./WeatherImage"
import WeatherTemperature from "./WeatherTemperature"
import FormattedDate from "./FormattedDate";

import "./Search.css";
export default function Search(props){
    return (
        <div className="Search">
    <div className="situation">
    <h1 className="text-uppercase">I'TS {props.data.description} <br/> IN {props.data.city}</h1>
    </div>
    <div className="row">
      <div className="col-5">
      <WeatherTemperature celsius={props.data.temperature} className="temperature"/>


      </div>
      <div className="col-6">
      <WeatherImage code={props.data.icon} size={36}  alt={props.data.description} className="situationImage ing-fluid max-width: 100%" />
        
        </div>
    </div>
    <div className="row detail">
      <div className="col-7">
        <h4>
          <ul>
            <li>{props.data.city}</li>
            <li><FormattedDate date={props.data.date} /></li>
            </ul>
        </h4>
      </div>
      <div className="col-5">
        <h4>
          Real feel {Math.round(props.data.realfeel)}°C
          <br />
          Wind {Math.round(props.data.wind)} km/h
          <br />
          Humidity {props.data.humidity}%

        </h4>
      </div>
    </div>
    </div>
)
}