import React, {useState} from "react";

import Search from "./Search";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){

const [weatherData,setWeatherData] =useState({ready:false});
const [city, setCity] = useState (props.defaultCity);
function handleResponse(response){
  console.log(response.data);
  setWeatherData({
   
    ready:true,
    temperature:response.data.temperature.current,
    city: response.data.city,
    coords:response.data.coordinates,
    wind:response.data.wind.speed,
    realfeel:response.data.temperature.feels_like,
    humidity:response.data.temperature.humidity,
    description:response.data.condition.description,
    date:new Date(response.data.time*1000),
    icon:response.data.condition.icon_url,

  });

}

function handleSubmit(event){
  event.preventDefault();
  search();
}
function handleCityChange(event){
setCity(event.target.value);
}
function search(){
  const apiKey="6a3c54ed0f54ba33o91e65bbf9bt60ae";
 
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
axios.get(apiUrl).then(handleResponse); 
}

function searchLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "6a3c54ed0f54ba33o91e65bbf9bt60ae";
  let apiEndpoint = "https://api.shecodes.io/weather/v1/current";
  let apiUrl = `${apiEndpoint}?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

if (weatherData.ready){
  return(
    
    <div className="Weather">
      <div className="searchBar">
      <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-7">
        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
        </div>
        <div className="col-3">
       <button type="submit" className="btn btn-light">Search</button>
       </div>
       <div className="col-2 locationButton">
              <button
                type="submit"
                title="finding location"
                onClick={getCurrentLocation}
              >
           🎯
              </button>
            </div>
       </div>
        </form> 
        
        </div>
        <Search data={weatherData}  />
        <WeatherForecast coordinates={weatherData.coords}/>
    </div>
    
  );
  
}
else{
search();
 
return "Loading...📍"
}

}