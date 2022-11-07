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
      <h2>{message}</h2>
    </div>
  );
}