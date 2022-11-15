import React from "react";
export default function FormattedDate(props){
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday"]
    let months = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
      ];
    let day =days[props.date.getDay()] ;
    let date= props.date.getDate();
    let month= months[props.date.getMonth()];
    let year=props.date.getFullYear();
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    if (minutes<10){
        minutes=`0${minutes}`;
    }
    if (hours<10){
        hours=`0${hours}`;
    }
    return <div>{day} {date} {month} {year}
    <br/>
    {hours}:{minutes}</div>;
}