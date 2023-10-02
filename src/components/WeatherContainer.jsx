import { useState } from "react";
import WeatherStat from "./WeatherStat";
import weatherIcons from "../utils/weatherIcons";


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

  

  console.log(weather);

  return (
    <div className="grid grid-rows-[1fr auto] justify-items-center  ">
      <section className=" min-h-[300px] flex   ">
        <img className="w-[300px] h-[290px] sm:w-[340px] sm:h-[300px]" src="/public/img/backgroundInfo.svg" />

        <h3 className="font-regular text-3xl flex fixed top-[200px] items-center w-[150px] h-[50px] p-2 sm:text-4xl">
          {changeUnitTemp(weather.main.temp)}
        </h3>
        <div className="fixed ml-[125px]  top-[160px] sm:ml-[140px] sm:top-[160px]">
          <img className="sm:w-[185px] sm:h-[185px]" src={weatherIcons[weather.weather[0].main]} alt="" />
        </div>

        <article className="fixed top-[255px] ml-2">
          <WeatherStat
            icon="/public/img/wind.svg"
            unit="m/s"
            value={weather.wind.speed}
          />
          <WeatherStat
            icon="/public/img/humidity.svg"
            unit="%"
            value={weather.main.humidity}
          />
          <WeatherStat
            icon="/public/img/pressure.svg"
            unit="hPa"
            value={weather.main.pressure}
          />

          <h5 className="font-regular text-xl p-1 sm:text-xl">{weather.name}, {weather.sys.country}</h5>

          <article className="relative mx-[135px] bottom-[30px] w-[150px] sm:mx-[180px] sm:bottom-[33px] ">
            <h5 className="font-regular text-base sm:text-xl " >
              {weather.weather[0].description}
            </h5>
          </article>
        </article>
      </section>

      <button
        className=" gap-1  p-[5px] border w-auto  rounded-full text-sm bg-gradient-to-l hover:from-pink-500 hover:to-blue-500 hover:border-none "
        onClick={handleChangeUnit}
      >
        {isCelsius ? "Cambiar a °F" : " Cambiar a °C"}
      </button>
    </div>
  );
};
export default WeatherContainer;
