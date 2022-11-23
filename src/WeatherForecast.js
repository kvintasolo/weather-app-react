import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data);
    }
    let apiKey= "6a3c54ed0f54ba33o91e65bbf9bt60ae"
    let longitude=props.coordinates.longitude;
    let latitude=props.coordinates.latitude;
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    
    
    return(
    <div className="WeatherForecast"><div className="row">
        <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="mist-night" size={36} />
            <div className="WeatherForecast-temperature">19</div>
            </div></div></div>);
}