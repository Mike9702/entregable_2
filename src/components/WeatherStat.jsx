const WeatherStat = ({ icon, value, unit }) => {
  return (
    <div className="flex items-center font-['lato'] font-light text-base gap-1 py-0.5 sm:text-xl">
        <img src={icon} alt="" />
        <span>{value} {unit}</span>

    </div>
  )
}
export default WeatherStat