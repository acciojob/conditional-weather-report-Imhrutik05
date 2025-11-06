
import React, {useState} from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

let temp = { temperature: 20, conditions: "Sunny" };

const App = () => {
  const [weatherData, setWeatherData] = useState(temp);
  console.log(weatherData)
  return (
    <div>
        
        <WeatherDisplay weatherData={weatherData} />
    </div>
  )
}

export default App
