import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherContainer from "./components/WeatherContainer";
import Loader from "./components/Loader";

function App() {
  const [weather, setWeather] = useState(null);

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "77c9e8fad3f0e19a94898383bee510b8";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then(({ data }) => setWeather(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main className="font-['lato'] font-regular backgroundApp min-h-screen text-white text-2xl flex justify-items-center justify-center items-center p-1">
      {weather === null ? <Loader /> :<WeatherContainer weather={weather} /> }
    </main>
  );
}

export default App;
