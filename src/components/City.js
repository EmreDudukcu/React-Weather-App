import CityContext from "../contexts/CityContext";
import { useContext } from "react";

function City() {
  const { city, setCity, cities } = useContext(CityContext);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  if (!cities || !cities.data) {
    // cities veya cities.data tanımlı değilse, boş bir içerik göster
    return <div>No cities data available</div>;
  }

  return (
    <div className="selected-city">
      <h1>{city}</h1>
      <div>
        <label htmlFor="city">City: </label>
        <select id="city" name="city" value={city} onChange={handleCityChange}>
          {cities.data.map((cityItem) => (
            <option key={cityItem.id} value={`${cityItem.name}`}>
              {cityItem.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default City;
