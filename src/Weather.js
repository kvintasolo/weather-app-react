import React, {useState} from "react";

import Search from "./Search";
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
    wind:response.data.wind.speed,
    realfeel:response.data.temperature.feels_like,
    humidity:response.data.temperature.humidity,
    description:response.data.condition.description,
    date:new Date(response.data.time*1000),

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

if (weatherData.ready){
  return(
    
    <div className="Weather">
      <div className="searchBar">
      <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
        </div>
        <div className="col-3">
       <button type="submit" className="btn btn-light">Search</button>
       </div>
       </div>
        </form> 
        
        </div>
        <Search data={weatherData}  />
    </div>
    
  );
  
}
else{
search();
 
return "Loading..."
}

}