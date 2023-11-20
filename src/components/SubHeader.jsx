import WeatherData from "./WeatherData";
import { mainWeather } from "../assets/Weather-icons";

const SubHeader = ({ weather, hours }) => {
  return (
    <div className="rounded-lg ">
      <div className="inline-flex w-[100%] text-cyan-200 bg-slate-800">
        {weather.message ? (
          <h5>🙄 {weather.message}</h5>
        ) : (
          <>
            <div>
              {" "}
              <img src={mainWeather} className="ml-2 w-14 sm:w-10 " />
            </div>

            <h2 className="mr-1 my-auto sm:text-[14px] text-yellow-400 ">
              {" "}
              weather status of "{" "}
            </h2>
            <h6 className="my-auto sm:text-[14px] ">
              {weather.name}, {weather.sys.country}{" "}
              <span className=" text-yellow-400">" </span>
            </h6>
          </>
        )}
      </div>
      <WeatherData weather={weather} hours={hours} />
    </div>
  );
};

export default SubHeader;
