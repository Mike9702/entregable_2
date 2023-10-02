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
      <section className="grid gap-2 justify-items-center">

        <picture className="absolute ml-[135px] top-[125px] ">
        <img
          className="  mx-[135px]  "
          src={weatherIcons[weather.weather[0].main]}
          alt=""
        />
        </picture>
        <img src="/img/backgroundInfo.svg" />
  
        <article className="absolute  top-[195px] mr-[200px] p-2   ">
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

        <h5 className=" absolute font-regular text-base bottom-[245px] ml-[130px] ">
          {weather.weather[0].description}
        </h5>

        <button
          className=" ju gap-1  p-[3px] border h-[40px] w-[105px]  rounded-full text-sm bg-gradient-to-l hover:from-pink-500 hover:to-blue-500 hover:border-none "
          onClick={handleChangeUnit}
        >
          {isCelsius ? "Cambiar a °F" : " Cambiar a °C"}
        </button>
      </section>
    </>
  );
};
export default WeatherContainer;
