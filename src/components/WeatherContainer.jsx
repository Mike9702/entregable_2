import { useState } from "react";
import WeatherStat from "./WeatherStat";

const WeatherContainer = ({ weather }) => {
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
    Clouds: "/img/fewClouds.svg",
    Mist: "/img/mist.svg",
    Rain: "/img/showerRain.svg",
    Snow: "/img/snow.svg",
  };

  return (
    <>
      <section className="grid gap-2 ">

        <picture className="absolute  ml-[15px] top-[165px] sm:ml-[5px] sm:top-[175px] ">
        <img
          className=" mx-[135px]  "
          src={weatherIcons[weather.weather[0].main]}
          alt=""
        />
        </picture>
        
        <img className="w-[312px] h-[290px]" src="/img/backgroundInfo.svg" />
  
        <article className="absolute top-[215px] mr-[150px]  sm:top-[210px] sm:mr-[180px] p-2   ">
          <h3 className="font-bold text-3xl  ">
            {changeUnitTemp(weather.main.temp)}
          </h3>

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

          <h5 className="font-regular text-xl p-1 sm:text-xl">
            {weather.name}, {weather.sys.country}
          </h5>
        </article>

        <h5 className=" absolute font-regular text-base bottom-[225px] ml-[180px] sm:bottom-[220px] sm:ml-[150px] ">
          {weather.weather[0].description}
        </h5>
        
      </section>
      <article className="absolute justify-items-center text-center  p-[3px] bottom-[120px]">
<button
          className="border rounded-full w-[90px] text-sm bg-gradient-to-l hover:from-pink-500 hover:to-blue-500 hover:border-none "
          onClick={handleChangeUnit}
        >
          {isCelsius ? "Cambiar a °F" : " Cambiar a °C"}
        </button>
</article>
    </>
  );
};
export default WeatherContainer;
