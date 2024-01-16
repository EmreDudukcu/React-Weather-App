import WeatherContext from "../contexts/WeatherContext";
import { useContext, useEffect } from "react";

function WeatherOther() {
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
  return (
    <div className="weather-other">
      <div>
        <div>
          <div>Visibility: </div>
          <div>{Math.round(weather[0].visibility / 1000)} km/h</div>
        </div>
        {
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/visible--v1.png"
            alt="visible--v1"
          />
        }
      </div>
      <div>
        <div>
          <div>Humidity: </div>
          <div>{weather[0].main.humidity} %</div>
        </div>
        {
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/hygrometer.png"
            alt="hygrometer"
          />
        }
      </div>
      <div>
        <div>
          <div>Pressure: </div>
          <div>{weather[0].main.pressure} hPa</div>
        </div>
        {
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/atmospheric-pressure--v1.png"
            alt="atmospheric-pressure--v1"
          />
        }
      </div>
      <div>
        <div>
          <div>Wind Speed: </div>
          <div>{weather[0].wind.speed * 3.6} km</div>
        </div>
        {
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/wind--v1.png"
            alt="wind--v1"
          />
        }
      </div>
    </div>
  );
}

export default WeatherOther;
