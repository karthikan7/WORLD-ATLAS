import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-[#0e0e0e] text-white py-6 px-4 sm:px-8 shadow-md">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <NavLink to="/" className="text-[22px] sm:text-[24px] text-amber-300 font-bold tracking-tight hover:text-yellow-400 transition">
          🌍 WORLD ATLAS
        </NavLink>

        <nav>
          <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8 text-[15px] sm:text-[16px] font-medium">
            <li><NavLink to="/" className="hover:text-yellow-400 transition">HOME</NavLink></li>
            <li><NavLink to="/about" className="hover:text-yellow-400 transition">ABOUT</NavLink></li>
            <li><NavLink to="/country" className="hover:text-yellow-400 transition">COUNTRY</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-yellow-400 transition">CONTACT</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
