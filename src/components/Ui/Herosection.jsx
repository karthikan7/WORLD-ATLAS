import { FaLongArrowAltRight } from "react-icons/fa";

export const Herosection = () => {
  return (
    <main className=" bg-black py-[4rem]">
      <div className="max-w-[140rem] py-0px mx-auto px-[5.0rem] grid grid-cols-2 max-lg:grid-cols-1 gap-[5.4rem] items-center">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-6xl text-white">
            Explore the world, one country at a Time.
          </h1>
          <p className=" text-white text-xl">
            Discover the history, culture, and beauty of every nation...
          </p>
          <button className="flex items-center gap-[1.2rem] px-[2.4rem] w-max my-2 cursor-pointer py-[0.6rem] bg-[#121013] text-white rounded-[1.5rem] border-gray-300 border-1 font-medium transition-all duration-300">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/world.png"
            alt=""
            className="w-full object-cover "
          />
        </div>
      </div>
    </main>
  );
};
