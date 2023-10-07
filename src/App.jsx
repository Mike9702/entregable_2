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
      <section className=" absolute top-16 ">
      <div className=" flex ">
        <form
        onSubmit={handleSubmit}
           
          className="flex justify-center  overflow-hidden w-[225px]  h-[40px] "
          
        >
          <input
            name="searchCity"
            placeholder="Search City..."
            className="border w-[120px] h-[35px] outline-none rounded-s-md text-black text-base  p-1"
            type="text"
            
          />
          <button  className="bg-gray-800  border h-[35px] w-[63px] items-center text-base rounded-e-md grid hover:bg-gradient-to-l hover:from-pink-500 hover:to-blue-500 ">Search</button>
        </form>
        </div> 
      </section>

      {weather === null ? <Loader /> : <WeatherContainer weather={weather} />    }

    
           
    </main>
  );
}

export default App;
