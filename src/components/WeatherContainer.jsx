import { useState } from "react";
import WeatherStat from "./WeatherStat";

const WeatherContainer = ({ weather, handleSubmit}) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const changeUnitTemp = (temp) => {
    if (isCelsius) {
      const celsiusTemp = (temp - 273.15).toFixed(1);
      return celsiusTemp + " °C";
    } else {
      const fahrenheitTemp = (((temp - 273.15) * 9) / 5 + 32).toFixed(1);
      return fahrenheitTemp + " °F";
    }
  };

  const handleChangeUnit = () => {
    setIsCelsius(!isCelsius);
  };
  
  const weatherIcons = {
    Drizzle: "/img/rain.svg",
    Thunderstorm: "/img/thunderStorm.svg",
    Clear: "/img/clearSky.svg",
    Clouds: "/img/scatteredClouds.svg", 
    Mist: "/img/mist.svg",
    Rain: "/img/showerRain.svg",
    Snow: "/img/snow.svg",
  };

  

  return (

    <section className=" relative m-1  ">

<div className=" absolute  -top-[120px] left-9">
        <form
        onSubmit={handleSubmit}
           
          className="absolute flex justify-center item overflow-hidden w-[225px]  h-[40px] "
          
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

      
      <img className="w-[312px] " src="/img/backgroundInfo.svg" />

      <article className="absolute top-[25px] left-[10px]">

    
        
        <h3 className="font-bold text-3xl  ">
          {changeUnitTemp(weather.main.temp)}
        </h3>
      </article>

      <article className="absolute top-[-35px] left-[140px] ">
      <img src={weatherIcons[weather.weather[0].main]} alt="" />
      </article>

      <article className=" absolute top-[55px] left-[5px]  m-1">
        <WeatherStat
          icon="/img/wind.svg"
          unit="m/s"
          value={weather.wind.speed}
        />
        <WeatherStat
          icon="/img/humidity.svg"
          unit="%"
          value={weather.main.humidity}
        />
        <WeatherStat
          icon="/img/pressure.svg"
          unit="hPa"
          value={weather.main.pressure}
        />

        <h5 className="font-regular text-xl p-1 ">

         {weather.name}, {weather.sys.country}
              
  
        </h5>

        
      </article>
      <article className="absolute left-[185px] top-[165px]">
          <h5 className="font-regular text-base ">
            {weather.weather[0].description}
          </h5>
        </article>

        <article className=" absolute left-[100px]">
          <button
            className="border rounded-full w-[90px] text-sm backgroundApp hover:bg-gradient-to-l hover:from-pink-500 hover:to-blue-500 hover:border-none "
            onClick={handleChangeUnit}
          >
            {isCelsius ? "Cambiar a °F" : " Cambiar a °C"}
          </button>
        </article>
    </section>

  );
};
export default WeatherContainer;
