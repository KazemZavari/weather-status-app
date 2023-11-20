import {
  clearDay,
  clearNight,
  cloudyDay,
  cloudyNight,
  mainWeather,
  rainy,
  snowy,
  thunder,
  hazeDay,
  hazeNight,
} from "../assets/Weather-icons";
// import rainy from "../assets/Weather-icons/index"
const Icon = ({ weather, hours }) => {
  const checkIcon = () => {
    if ((hours > 19 ) ) {
      if (weather.weather[0].main === "Clear") {
        return clearNight;
      } else if (weather.weather[0].main === "Clouds") {
        return cloudyNight;
      } else if (weather.weather[0].main === "Rain") {
        return rainy;
      } else if (weather.weather[0].main === "ُSnow") {
        return snowy;
      } else if (weather.weather[0].main === "Haze") {
        return hazeNight;
      } else if (weather.weather[0].main === "Mist") {
        return hazeNight;
      } else if (weather.weather[0].main === "Thunderstorm") {
        return thunder;
      }
    } else if (hours < 19) {
      if (weather.weather[0].main === "Clear") {
        return clearDay;
      } else if (weather.weather[0].main === "Clouds") {
        return cloudyDay;
      } else if (weather.weather[0].main === "Rain") {
        return rainy;
      } else if (weather.weather[0].main === "ُSnow") {
        return snowy;
      } else if (weather.weather[0].main === "Haze") {
        return hazeDay;
      } else if (weather.weather[0].main === "Mist") {
        return hazeDay;
      } else if (weather.weather[0].main === "Thunderstorm") {
        return thunder;
      }
    } else {
      return mainWeather;
    }
  };
  return (
    <div className="flex justify-center ">
      <img
        // src={weatherImg}
        src={checkIcon()}
        className="w-[210px] mt-[10px]"
        alt=" weather icon "
      />
    </div>
  );
};

export default Icon;
