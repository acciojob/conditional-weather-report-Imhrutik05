import React from "react";

function WeatherDisplay({weatherData}) {

    let styleObj = {color: ""};
    if(weatherData.temperature > 20){
        styleObj.color = "red";
    } else {
        styleObj.color = 'blue';
    }

    return (
        <>
            <p>Temperature: <span style={styleObj}>{weatherData.temperature}</span></p>
            <p>Conditions: {weatherData.conditions}</p>
        </>
    )
}

export default WeatherDisplay;