import Icon from "./Icon";

const NonDataExist = ({ weather }) => {
  return (
    <div className="rounded-xl h-[460px] bg-slate-700 flex">
      <div className="grid grid-cols-4  ">
        <div className="block mt-5 text-yellow-100 space-y-2 col-span-2">
          <div className="text-center ">
            <div className="md-text font-serif text-[22px] p-3 ">
              <span>
                {" "}
                {weather.message ? (
                  <>
                    <h5>🙄 {weather.message}</h5>
                    <h5> please enter a city name</h5>
                  </>
                ) : (
                  <h6>🙄 please enter a city name </h6>
                )}
              </span>
            </div>
          </div>
        </div>

        <div
          className="w-[300px] md:w-[100%] h-[460px] mb-1 col-span-2 rounded-lg
                     bg-slate-700"
        >
          <Icon weather={weather} />
        </div>
      </div>
    </div>
  );
};

export default NonDataExist;
