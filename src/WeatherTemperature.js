import React, {useState} from "react";
export default function WeatherTemperature(props) {
    const[unit, setUnit]=useState("celsius");
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
      
        }
    
    if (unit==='celsius' ){ return (
        <div className="WeatherTemperature">
<h2 className="temperature"> {Math.round(props.celsius)}<div className="float unit active">°C |<a href="/" className="fahrenheit-link" onClick={showFahrenheit} >°F</a></div></h2>
</div>);}
else{
    let fahrenheit=(props.celsius *9)/5+32;
    return ( <div className="WeatherTemperature">
<h2 className="temperature"> {Math.round(fahrenheit)}<div className="float unit"><a href="/" className="celcius-link" onClick={showCelsius} >°C </a>|°F</div></h2>
</div>);}
}
   