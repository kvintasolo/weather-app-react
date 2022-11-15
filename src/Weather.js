import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(){
const [ready, setReady]=useState(false);
const [weatherData,setweatherData] =useState({});
function handleResponse(response){
  setweatherData({
    temperature:response.data.temperature.current,
    city: response.data.city,
    wind:response.data.wind.speed,
    realfeel:response.data.temperature.feels_like,

  });

  setReady(true);
}
if (ready){
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
      <h1>{weatherData.city}</h1>
      </div>
      <div className="row">
        <div className="col-4">
<h2> {Math.round(weatherData.temperature)}<div className="float">°C |°F</div></h2>
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
              <li>{weatherData.city}</li>
              <li>Wednesday 9 Nov 2022</li>
              <li>15:27</li>
            </ul>
          </h4>
        </div>
        <div className="col-5">
          <h4>
            Real feel 12°
            <br />
            Wind {weatherData.wind} km/h
            <br />
            Humidity 80%

          </h4>
        </div>
      </div>

    </div>
    
  );
  
}
else{

  const apiKey="6a3c54ed0f54ba33o91e65bbf9bt60ae";
  let city="Kyiv"
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
axios.get(apiUrl).then(handleResponse); 
return "Loading..."
}

}