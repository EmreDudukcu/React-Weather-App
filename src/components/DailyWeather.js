import React from "react";

function DailyWeather({ day, times, weatherData }) {
  return (
    <div>
      <h2>{day}</h2>
      <div className="weather-daily-details">
        {times.map((time) => (
          <div key={time} className="weather-daily-details-w">
            <h3>{time}</h3>
            <div>
              {weatherData[time].map((weatherItem, index) => (
                <div key={index}>
                  <div>{Math.round(weatherItem.main.temp - 272.15)} °C</div>
                  <div>{weatherItem.weather[0].main}</div>
                  <div>
                    {
                      <img
                        src={`http://openweathermap.org/img/wn/${weatherItem.weather[0].icon}.png`}
                        alt=""
                      />
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyWeather;
