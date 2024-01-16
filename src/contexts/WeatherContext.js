import { createContext, useState, useEffect, useContext } from "react";
import LocationContext from "./LocationContext";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const { location } = useContext(LocationContext);

  useEffect(() => {
    if (!location || location.length === 0) {
      console.warn("Location is empty");
      return;
    }

    const API_key = "3d381c866e373bc2d8c5c17c10bca033";

    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${location[0].lat}&lon=${location[0].lon}&appid=${API_key}`;

    axios(weatherURL)
      .then((res) => {
        setWeather(res.data.list);
      })
      .catch((error) => {
        console.error("Unknown error:", error.message);
      });
  }, [location]);

  console.log(weather);
  console.log("weather");

  const values = {
    weather,
    setWeather,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
