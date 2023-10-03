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
    <section className=" m-1  ">
      <img className="  w-[312px] h-[290px]" src="/img/backgroundInfo.svg" />

      <article className=" absolute  top-[215px] pl-2">
        <img
          className=" absolute top-[-35px] left-[185px]"
          src={weatherIcons[weather.weather[0].main]}
          alt=""
        />
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

        <article className="absolute left-40 w-36 bottom-[8px]">
          <h5 className="font-regular text-base ">
            {weather.weather[0].description}
          </h5>
        </article>
      </article>

      <article className=" grid justify-items-center bottom-[10px]">
        <button
          className="border rounded-full w-[90px] text-sm bg-gradient-to-l hover:from-pink-500 hover:to-blue-500 hover:border-none "
          onClick={handleChangeUnit}
        >
          {isCelsius ? "Cambiar a °F" : " Cambiar a °C"}
        </button>
      </article>
    </section>
  );
};
export default WeatherContainer;
