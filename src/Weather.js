import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

import "./styles.css";
export default function Wather(props) {
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }
  let image = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=85ede89f59356b77be6fb516773c248a&units=metric`;
  axios.get(url).then(showTemperature);

  return (
    <div className="Weather">
    <ul>
      <li>{props.city}</li>
      <li>Temperature: {temperature} °C</li>
      <li>Description: {description}</li>
      <li>Humidity: {humidity} %</li>
      <li>Wind: {wind} km/h</li>
      <li>
        <img src={image} alt={description} />
      </li>
    </ul>
    </div>
  );
}
