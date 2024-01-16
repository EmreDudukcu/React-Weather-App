import WeatherContext from "../contexts/WeatherContext";
import DailyWeather from "./DailyWeather";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Daily() {
  const { weather } = useContext(WeatherContext);
  const [days, setDays] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    if (!weather || weather.length === 0) {
      console.warn("Weather is empty");
      return;
    }

    const dailyData = {};
    let firstDay = null; // İlk tarihi saklamak için bir değişken ekleyelim
    weather.forEach((weatherItem) => {
      const date = new Date(weatherItem.dt * 1000);
      const day = date.toLocaleDateString("tr-TR");
      const time = date.toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
      });

      if (!firstDay) {
        firstDay = day; // İlk tarihi belirle
      }

      if (!dailyData[day]) {
        dailyData[day] = {};
      }
      if (!dailyData[day][time]) {
        dailyData[day][time] = [weatherItem];
      } else {
        dailyData[day][time].push(weatherItem);
      }
    });

    setDays(dailyData);

    // İlk tarihi setSelectedDay'e ata
    setSelectedDay(firstDay);
  }, [weather]);

  if (!weather || weather.length === 0) {
    return null;
  }

  return (
    <div>
      <Router>
        <div className="weather-daily">
          {Object.keys(days).map((day) => (
            <div key={day}>
              <Link to="" onClick={() => setSelectedDay(day)} className="link">
                <div className="weather-daily-w">
                  <h3>{day}</h3>
                  <div>
                    {Math.round(
                      days[day][Object.keys(days[day])[0]][0].main.temp - 272.15
                    )}{" "}
                    °C
                  </div>
                  <div>
                    {days[day][Object.keys(days[day])[0]][0].weather[0].main}
                  </div>
                  <div>
                    {
                      <img
                        src={`http://openweathermap.org/img/wn/${
                          days[day][Object.keys(days[day])[0]][0].weather[0]
                            .icon
                        }.png`}
                        alt=""
                      />
                    }
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="weather-daily">
          {selectedDay && (
            <div>
              <Routes>
                <Route
                  path=""
                  element={
                    <DailyWeather
                      day={selectedDay}
                      times={Object.keys(days[selectedDay])}
                      weatherData={days[selectedDay]}
                    />
                  }
                />
              </Routes>
            </div>
          )}
        </div>
      </Router>
    </div>
  );
}

export default Daily;
