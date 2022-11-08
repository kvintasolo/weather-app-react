import React, { useState } from "react";
import "./styles.css";
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
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={searchCity} />
        <input type="submit" value="Search" />
      </form>
      <button className="btn btn-primary">Hello</button>
      <h2>{message}</h2>
      <h5>This project was coded by <a href="https://serene-mandazi-45beb2.netlify.app/" target="_blank" rel="noreferrer">Anna Stratanovych</a> and is <a href="https://github.com/kvintasolo/weather-app-react" target="_blank" rel="noreferrer"> Open-sourced on GitHub</a></h5>
    </div>
  );
}