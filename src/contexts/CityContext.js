import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("Giresun");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const citiesURL = `https://turkiyeapi.cyclic.app/api/v1/provinces?fields=id%2Cname`;
    axios(citiesURL)
      .then((res) => setCities(res.data))
      .catch((error) => {
        console.error("Unknown error:", error.message);
      });
  }, []);

  const values = {
    city,
    setCity,
    cities,
    setCities,
  };
  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export default CityContext;
