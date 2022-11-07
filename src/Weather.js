import React from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner'
export default function Weather(props){
    function handleResponse(response){
        alert(`the weather in ${response.data.name} is ${response.data.main.temp} °C`);
    }
    let apiKey="85ede89f59356b77be6fb516773c248a";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
    return(
        <div className="Weather">
        <h2>Hello from Weather</h2>
        <Audio
  height="80"
  width="80"
  radius="9"
  color="purple"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
        </div>
    );
}