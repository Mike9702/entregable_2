import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import WeatherContainer from "./components/WeatherContainer";

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchCity = (e.target.searchCity.value)
    const API_KEY = "77c9e8fad3f0e19a94898383bee510b8";

    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}`)
    .then(({ data }) => setWeather(data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);
   
  return (
    <main className="grid justify-items-center items-center  font-['lato'] font-regular backgroundApp min-h-screen text-white text-2xl p-2   ">
        

      {weather === null ? <Loader /> : <WeatherContainer weather={weather} />    }

    
    </main>
  );
}

export default App;
