import React, { useState } from "react";
import "./styles.css";
import "./Search.css";
import Weather from "./Weather";
export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setMessage(<Weather city={city} />);
  }
  function searchCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <div className="container">
      <h1>Weather App</h1>
     
        <div className="row">
        
          <div className="search-bar">

          <form onSubmit={handleSubmit}>
          <div className="col">
        <input className="form-control form-control-sm" type="search" placeholder="Type a city" onChange={searchCity} />
        </div>
        <div className="col">
        <button type="submit" className="btn btn-light" >Search</button>
        </div>
        </form>
        
        </div>
        </div>
      
      <div className="situation">
        <h1>It's cloudy in Kyiv</h1>
      </div>
      <div className="row">
        <div className="col-4">
<h2> 12°C |°F</h2>
<h3>MAX 13°
<br />
MIN 10°
</h3>
        </div>
        <div className="col-6">
          <img alt="cloudy" src="https://delicate-weather.netlify.app/img/img_02_cloudy.png" width="400px"/>
          </div>
      </div>
      <div className="row detail">
        <div className="col-7">
          <h4>
            <ul>
              <li>Kyiv</li>
              <li>Wednesday 9 Nov 2022</li>
              <li>15:27</li>
            </ul>
          </h4>
        </div>
        <div className="col-5">
          <h5>
            Real feel 12°
            <br />
            Wind 2 km/h1
            <br />
            Humidity 80%

          </h5>
        </div>
      </div>
      <h2>{message}</h2>
      </div>
      
      <h5>This project was coded by <a href="https://serene-mandazi-45beb2.netlify.app/" target="_blank" rel="noreferrer">Anna Stratanovych</a> and is <a href="https://github.com/kvintasolo/weather-app-react" target="_blank" rel="noreferrer"> Open-sourced on GitHub</a></h5>
    </div>
  );
}