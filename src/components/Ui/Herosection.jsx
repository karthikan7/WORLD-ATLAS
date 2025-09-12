import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Herosection = () => {
  return (
    <main className="bg-black py-16 px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Explore the world, one country at a Time.
          </h1>
          <p className="text-white text-lg sm:text-xl">
            Discover the history, culture, and beauty of every nation...
          </p>
          <NavLink to="country">
            <button className="flex items-center justify-center lg:justify-start gap-3 px-6 py-2 bg-[#121013] text-white rounded-full border border-gray-300 font-medium transition-all duration-300 w-max mx-auto lg:mx-0">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>

        {/* Enlarged and responsive image */}
        <div className="flex justify-center items-center">
          <img
            src="/images/world.png"
            alt="World"
            className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] object-contain"
          />
        </div>
      </div>
    </main>
  );
};
