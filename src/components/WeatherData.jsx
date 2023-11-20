import Icon from "./Icon";
const WeatherData = ({ weather, hours }) => {
  return (
    <div className="grid grid-cols-4 mt-[-6px] sm:grid-cols-none sm:grid-rows-2">
      <div
        className=" rounded-b-lg bg-slate-600 text-yellow-400 h-[460px] sm:h-[460px]
                  col-span-2 sm:col-span-full sm:row-span-1 sm:mt-[-133px]"
      >
        <div className="mt-5 ml-5 space-y-3">
          <h4>
            sky status of {weather.name}: {weather.weather[0].main}{" "}
          </h4>
          <div>
            temperature: {Math.round(weather.main.temp)}
            <sup>o</sup>C
          </div>
          <h4>wind_speed: {weather.wind.speed} m/s</h4>
          <h4>
            wind_deg: {weather.wind.deg}
            <sup>o</sup>
          </h4>

          <h4>humidity: {weather.main.humidity}% </h4>
          <h4>pressure: {weather.main.pressure} </h4>
          <h4>visibility: {weather.visibility} meters</h4>
          <h5>lat: {weather.coord.lat}</h5>
          <h5>lon:{weather.coord.lon}</h5>
          <h5>sunrise: {weather.sys.sunrise}</h5>
          <h5>sunset: {weather.sys.sunset}</h5>
        </div>
      </div>

      <div
        className="w-[100%] sm:col-span-full  sm:row-span-1 sm:row-start-1 h-[459px]
               sm:h-[200px] col-span-2 rounded-b-lg bg-slate-700  "
      >
        <div className="sm:opacity-100 opacity-90 group-hover:opacity-100">
          <Icon weather={weather} hours={hours} />{" "}
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
