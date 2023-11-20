import { useTime } from "../hooks/time";
import { days, months } from "../constant";
import Switch from "./SwitchButton";

const ShowTime = ({ handleButton }) => {
  const Clock = () => {
    const time = useTime();
    return (
      <span
        className="text-yellow-200 lg:text-slate-100 flex justify-center align-middle 
                   md:pt-4 pt-2 text-[16px] md:text-[14px] sm:text-[12px]"
      >
        <span
          className="mr-2 mt-[-16px] text-[35px] lg:text-[22px] lg:mt-[-5px] sm:text-lg 
                        sm:mt-[-5px] md:mt-[-8px]"
        >
          ⌚
        </span>{" "}
        {time.toLocaleTimeString()}
      </span>
    );
  };

  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let day = days[d.getDay()];
  let month = months[d.getMonth()];
  return (
    <div className="text-center">
      <div className="">
        <Clock />{" "}
        <span
          className=" text-yellow-200 lg:text-slate-200 lg:block justify-center
                           sm:mt-1 text-[16px] pl-2 md:text-[14px] sm:text-[11px]"
        >
          <span className="lg:inline-block md:hidden hidden">{day},</span>{" "}
          {date} {month} {year}
        </span>
      </div>
      <div className="mt-3 md:hidden">
        {" "}
        <Switch handleButton={handleButton} />
      </div>
    </div>
  );
};

export default ShowTime;
