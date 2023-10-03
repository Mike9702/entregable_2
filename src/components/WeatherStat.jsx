const WeatherStat = ({ icon, value, unit }) => {
  return (
    <div className=" flex pr-1 mt-2 items-center justify-items-center font-['lato'] font-light text-base gap-1 ">
        <img src={icon} alt="" />
        <span>{value} {unit}</span>
    </div>
  )
}
export default WeatherStat