

import React from "react";

export default function WeatherImage(props) {
  const codeMapping = {
    "clear-sky-day": require("./images/img_01_sunny.png"),
    "clear-sky-night": require("./images/img_01_sunny.png"),
    "broken-clouds-day": require("./images/img_03_partly cloudy.png"),
    "broken-clouds-night": require("./images/img_03_partly cloudy.png"),
    "few-clouds-day": require("./images/img_02_cloudy.png"),
    "few-clouds-night": require("./images/img_02_cloudy.png"),
    "mist-day": require("./images/img_06_windy.png"),
    "mist-night": require("./images/img_06_windy.png"),
    "rain-day": require("./images/img_04_rainy.png"),
    "rain-night": require("./images/img_04_rainy.png"),
    "scattered-clouds-day": require("./images/img_03_partly cloudy.png"),
    "scattered-clouds-night": require("./images/img_03_partly cloudy.png"),
    "shower-rain-day": require("./images/img_04_rainy.png"),
    "shower-rain-night": require("./images/img_04_rainy.png"),
    "snow-day": require("./images/img_05_snowy.png"),
    "snow-night": require("./images/img_05_snowy.png"),
    "thunderstorm-day": require("./images/img_04_rainy.png"),
    "thunderstorm-night": require("./images/img_04_rainy.png"),
  };
  return (
    <img
      className="weatherIcon"
      src={codeMapping[props.code]}
      alt={props.alt}
      width={props.size}
    />
  );
}