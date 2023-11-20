import ShowTime from "./ShowTime";
import { api } from "../api/weatherApi";
const Header = ({ setCityName, handleButton, cityName, setWeather }) => {
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.url}weather?q=${cityName}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCityName("");
        });
    }
  };

  return (
    <div className="h-[70px] w-[100%] bg-yellow-500 rounded-t-lg">
      <div className="text-gray-600 text-[18px] grid grid-cols-2 align-middle rounded-t-lg">
        <input
          type="search"
          className=" lg:col-span-1 col-span-2 h-[70px] cursor-pointer bg-yellow-300  
                  hover:bg-yellow-200 w-[100%] placeholder:text-gray-400 p-[1rem]
                    md-[.7rem] flex text-[18px] md:text-[14px] focus:border-none
                    outline-none rounded-t-lg"
          placeholder="Search a city"
          name="search"
          id="search"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          onKeyPress={search}
          autoComplete="on"
        />
        <div className="w-[100%] lg:col-span-1 hidden lg:block ">
          <ShowTime handleButton={handleButton} />
        </div>
      </div>
    </div>
  );
};

export default Header;
