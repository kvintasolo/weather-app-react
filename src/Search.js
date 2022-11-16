import React from "react";
import FormattedDate from "./FormattedDate";
import "./Search.css"
export default function Search(props){
    return (
        <div className="Search">
    <div className="situation">
    <h1 className="text-uppercase">I'TS {props.data.description} <br/> IN {props.data.city}</h1>
    </div>
    <div className="row">
      <div className="col-4">
<h2> {Math.round(props.data.temperature)}<div className="float">°C |°F</div></h2>
<h3>MAX 13°
<br />
MIN 10°
</h3>
      </div>
      <div className="col-6">
        <img alt="cloudy" src="https://delicate-weather.netlify.app/img/img_02_cloudy.png" />
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