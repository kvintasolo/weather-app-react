import React from "react";
import "./Weather.css";

export default function Weather(){
  return(
    <div className="Weather">
      <div className="searchBar">
      <form>
      <div className="row">
        <div className="col-9">
        <input type="search" placeholder="Enter a city..." className="form-control"/>
        </div>
        <div className="col-3">
       <button type="submit" className="btn btnght">Search</button>
       </div>
       </div>
        </form> 
        </div>
       <div className="situation">
      <h1>I'TS CLOUDY IN</h1>
      <h1> KYIV</h1>
      </div>
      <div className="row">
        <div className="col-4">
<h2> 12<div className="float">°C |°F</div></h2>
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
              <li>Kyiv</li>
              <li>Wednesday 9 Nov 2022</li>
              <li>15:27</li>
            </ul>
          </h4>
        </div>
        <div className="col-5">
          <h4>
            Real feel 12°
            <br />
            Wind 2 km/h1
            <br />
            Humidity 80%

          </h4>
        </div>
      </div>

    </div>
    
  )
}