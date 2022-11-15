import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){

const [weatherData,setweatherData] =useState({ready:false});
function handleResponse(response){
  console.log(response.data.time);
  setweatherData({
    ready:true,
    temperature:response.data.temperature.current,
    city: response.data.city,
    wind:response.data.wind.speed,
    realfeel:response.data.temperature.feels_like,
    humidity:response.data.temperature.humidity,
    description:response.data.condition.description,
    date:new Date(response.data.time*1000),

  });

}
if (weatherData.ready){
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
      <h1 className="text-uppercase">I'TS {weatherData.description} IN {weatherData.city}</h1>
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
              <li><FormattedDate date={weatherData.date} /></li>
              </ul>
          </h4>
        </div>
        <div className="col-5">
          <h4>
            Real feel {Math.round(weatherData.realfeel)}°C
            <br />
            Wind {weatherData.wind} km/h
            <br />
            Humidity {weatherData.humidity}%

          </h4>
        </div>
      </div>

    </div>
    
  );
  
}
else{

  const apiKey="6a3c54ed0f54ba33o91e65bbf9bt60ae";
 
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`
axios.get(apiUrl).then(handleResponse); 
return "Loading..."
}

}