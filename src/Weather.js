import React, {useState} from "react";

import Search from "./Search";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){

const [weatherData,setWeatherData] =useState({ready:false});
const [city, setCity] = useState (props.defaultCity);
const [appColor, setAppColor] = useState("to top, #9fb8d1 0%, #c7e3f9 70%");
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
    icon:response.data.condition.icon,
    country: response.data.country,
    

  });
  
    if (response.data.condition.icon === "clear-sky-day" ||  
    response.data.condition.icon === "clear-sky-night") {
   
      setAppColor("to top, #ff9a9e 0%, #f9df70 90%");
    
    } else if (
      response.data.condition.icon === "few-clouds-day" ||
      response.data.condition.icon === "few-clouds-night"
    ) {
     
      setAppColor("to top, #9fb8d1 0%, #b7b7b7 70%");
    } else if (
      response.data.condition.icon === "scattered-clouds-day" ||
      response.data.condition.icon === "scattered-clouds-night" ||
      response.data.condition.icon === "broken-clouds-day" ||
      response.data.condition.icon === "broken-clouds-night" 
    ) {
     
      setAppColor("to top, #8db4d4 0%, #b099e1 70%");
    } else if (
      response.data.condition.icon === "rain-day" ||
      response.data.condition.icon === "rain-night" ||
      response.data.condition.icon === "thunderstorm-day" ||
      response.data.condition.icon === "thunderstorm-night" ||
      response.data.condition.icon === "shower-rain-day" ||
      response.data.condition.icon === "shower-rain-night"
    ) {
      
      setAppColor("to top, #b7b7b7 0%, #9fb8d1 70%");
    } else if (
      response.data.condition.icon === "mist-day" ||
      response.data.condition.icon === "mist-night"
    ) {
      
      setAppColor("to top, #9fb8d1 0%, #c7e3f9 70%");
    }
  
    else if (
      response.data.condition.icon === "snow-day" ||
      response.data.condition.icon === "snow-night"
    ) {
      
      setAppColor("to top, #1179e1 0%, #90bde0 70%");
    }
  
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
    
    <div className="Weather" style={{ backgroundImage: `linear-gradient(${appColor})`}}>
    
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
                title="current location"
                onClick={getCurrentLocation}
                className="opacity-50"
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