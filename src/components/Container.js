import City from "./City";
import Weather from "./Weather";
import WeatherOther from "./WeatherOther";
import Daily from "./Daily";

function Container() {
  return (
    <div className="container">
      <City />
      <Weather />
      <WeatherOther />
      <Daily />
    </div>
  );
}

export default Container;
