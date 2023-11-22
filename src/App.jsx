import { useState } from "react";
import { Parallax } from "react-parallax";
import bgImgNight from "./assets/images/night.jpg";
import bgImgDay from "./assets/images/day.jpg";
import {
  Header,
  Footer,
  Switch,
  ShowTime,
  NonDataExist,
  SubHeader,
} from "./components";
import "./App.css";

const App = () => {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState({});
  const [background, setBackground] = useState(bgImgDay);

  const time = new Date();
  let hours = time.getHours();

  const handleButton = () => {
    if (background === bgImgNight) {
      setBackground(bgImgDay);
    } else if (background === bgImgDay) {
      setBackground(bgImgNight);
    }
  };
  {
    console.log(weather);
  }

  return (
    <>
      <Parallax
        bgImage={background}
        strength={200}
        className="scroll-smooth overflow-scroll "
      >
        <div className="hidden mb-[-40px] md:flex md:justify-center">
          <Switch handleButton={handleButton} />
        </div>

        <div className="w-[100%] mt-16 mb-5 md:overflow-y-scroll ">
          <div
            className="flex fixed ml-8 lg:hidden bg-slate-700 opacity-80 hover:opacity-95 
                        cursor-default p-5 rounded-2xl"
          >
            <ShowTime handleButton={handleButton} />
          </div>
          <div className="w-[100%] h-[120vh] sm:h-[100vh] flex flex-col">
            <div className="w-[90%] max-w-[600px] mx-auto group opacity-80 hover:opacity-90">
              <div className=" sm:mr-[14px]">
                <Header
                  setCityName={setCityName}
                  handleButton={handleButton}
                  cityName={cityName}
                  setWeather={setWeather}
                />
                {typeof weather.main !== "undefined" ? (
                  <SubHeader weather={weather} hours={hours} />
                ) : (
                  <NonDataExist weather={weather} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      <Footer />
    </>
  );
};
export default App;
