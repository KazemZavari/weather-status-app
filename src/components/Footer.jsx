import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <>
      <div className="w-[100%] group ">
        <div
          className="text-slate-600 group-hover:text-slate-500 sm:text-slate-500
                            flex justify-end items-center "
        >
          <div
            className="h-[190px] sm:h-[290px] bg-gradient-to-r to-slate-950 from-blue-950
                             my-auto w-[100%] "
          >
            <div
              className="text-[14px] md:text-[12px] mt-5 sm:mt-2 text-center grid grid-cols-2
                         sm:grid-cols-none sm:grid-rows-2 gap-5"
            >
              {" "}
              <div className="col-span-1 sm:row-span-1 text-left ml-52 sm:ml-10 md:mr-0 space-y-3">
                <h3 className="text-slate-400 md:my-3 mr-5 md:mr-0 sm:mb-2 text-[18px] md:text-[16px]">
                  {" "}
                  Contact The Developer
                </h3>
                <h5 className=" text-gray-500 hover:text-gray-400 cursor-pointer text-[14px]">
                  <EmailIcon className="mr-1 md:mr-0" />{" "}
                  kazemzavari.69@gmail.com
                </h5>
                <h5 className=" text-gray-500 hover:text-gray-400 cursor-pointer mb-2 sm:mb-1">
                  <LocalPhoneIcon className="mr-1 sm:mr-0" /> +98 - 9101527203
                </h5>

                <h5 className=" text-gray-500 hover:text-gray-400 cursor-pointer text-[14px]">
                  <a
                    href="https://github.com/KazemZavari/weather-status-app"
                    target="_blank"
                    className="block my-2  hover:underline hover:text-gray-400"
                  >
                    {" "}
                    <GitHubIcon className="mr-1" />
                    gitHub
                  </a>
                </h5>
              </div>
              <div
                className="col-span-1 sm:row-span-1 text-left  ml-10 
                             text-[16px] md:text-[14px]  "
              >
                <h3 className="text-slate-400 mb-2 text-[18px] md:text-[17px]">
                  {" "}
                  Other{" "}
                </h3>
                <a
                  href="https://openweathermap.org/api"
                  target="_blank"
                  className="block my-1 hover:underline  hover:text-gray-400"
                >
                  {" "}
                  weatherApi
                </a>
                <a
                  href="https://github.com/KazemZavari/weather-status-app"
                  className="hover:underline hover:text-gray-400"
                  target="_blank"
                >
                  {" "}
                  Resources
                </a>
              </div>
            </div>
          </div>
        </div>

        <SubFooter />
      </div>
    </>
  );
};

export default Footer;
