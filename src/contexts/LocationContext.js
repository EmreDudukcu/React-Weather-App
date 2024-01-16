import { createContext, useState, useEffect, useContext } from "react";
import CityContext from "./CityContext";
import axios from "axios";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const { city } = useContext(CityContext);

  useEffect(() => {
    if (city === undefined) {
      console.warn("City is empty");
      return;
    }
    const API_key = "3d381c866e373bc2d8c5c17c10bca033";
    const cityLocationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_key}`;
    axios(cityLocationURL)
      .then((res) => setLocation(res.data))
      .catch((error) => {
        console.error("Unknown error:", error.message);
      });
  }, [city]);
  if (!location || location.length === 0) {
    return null;
  }

  const values = {
    location,
    setLocation,
  };
  return (
    <LocationContext.Provider value={values}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
