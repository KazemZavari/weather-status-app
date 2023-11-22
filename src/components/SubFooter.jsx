const SubFooter = () => {
  return (
    <div
      className="w-[100%] text-[15px] md:text-[11px] space-x-40 md:space-x-24 sm:space-x-10 bg-gradient-to-r to-slate-900
                   from-blue-950 flex items-center justify-center "
    >
      <div className="p-5 sm:p-3 ">
        <span className="text-gray-400">Made whit </span>
        <span className="text-red-500 text-[20px] sm:text-[18px] px-1 group-hover:text-red-600 ">
          {" "}
          ❤{" "}
        </span>{" "}
        <span className="text-gray-400">
          by{" "}
          <a
            href="https://github.com/KazemZavari"
            className="underline hover:no-underline hover:text-gray-300 cursor-pointer ml-1"
            target="_blank"
          >
            Kazem Zavari
          </a>{" "}
        </span>
      </div>
    </div>
  );
};

export default SubFooter;
