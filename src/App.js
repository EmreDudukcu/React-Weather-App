import "./App.css";
import { LocationProvider } from "./contexts/LocationContext";
import { CityProvider } from "./contexts/CityContext";
import { WeatherProvider } from "./contexts/WeatherContext";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <CityProvider>
        <LocationProvider>
          <WeatherProvider>
            <Container />
          </WeatherProvider>
        </LocationProvider>
      </CityProvider>
    </div>
  );
}

export default App;
