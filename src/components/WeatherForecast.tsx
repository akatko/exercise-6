import getWeather from "../services/getWeather";
import { useState, useEffect } from "react";
import Period from "../models/weather-model";

export default function WeatherForecast() {
  const [weather, setWeather] = useState<Period[]>([]);

  useEffect(() => {
    getWeather().then((data) => setWeather(data));
  }, []);

  return (
    <div className="WeatherForecast">
            <h1>Weather Forecast</h1>
            {weather.map((day, index) => (
                <div key={index} className="weather">
                    <h2>{day.name}</h2>
                    <p>Temperature: {day.temperature}</p>
                    <img src={day.icon}/>
                    <p>{day.detailedForecast}</p>
                </div>
            ))}
        </div>
  );
}
