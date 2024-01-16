import WeatherContext from "../contexts/WeatherContext";
import { useContext, useEffect } from "react";

function Weather() {
  const { weather } = useContext(WeatherContext);

  useEffect(() => {
    if (!weather || weather.length === 0) {
      console.warn("Weather is empty");
      return;
    }
  }, [weather]);

  // weather boşsa veya undefined ise render etme
  if (!weather || weather.length === 0) {
    return null;
  }
  const iconURL = `http://openweathermap.org/img/wn/${weather[0].weather[0].icon}.png`;

  return (
    <div className="weather-current">
      <div>{<img src={iconURL} alt="" />}</div>
      <div>{Math.round(weather[0].main.temp - 272.15)} °C </div>
      <div>{weather[0].weather[0].main} </div>
    </div>
  );
}

export default Weather;
