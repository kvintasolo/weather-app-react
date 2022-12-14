import React from "react";
import Weather from "./Weather";
import "./App.css";


export default function App(){
    return(
        <div className="App">
            <div className="container">
                <Weather defaultCity="London"/>
                <footer>
                <p>This project was coded by <a href="https://serene-mandazi-45beb2.netlify.app/" target="_blank" rel="noreferrer" className="aboutLink">Anna Stratanovych</a> and is <a href="https://github.com/kvintasolo/weather-app-react" target="_blank" rel="noreferrer" className="aboutLink"> Open-sourced on GitHub</a> and <a href="https://fanciful-chaja-9f4073.netlify.app/" target="_blank" rel="noreferrer" className="aboutLink">  hosted on Netlify</a></p>
                </footer>
               
            </div>
        </div>
    )
}