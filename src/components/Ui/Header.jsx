import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-[#0e0e0e] text-white py-6 px-8 shadow-md">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-[24px] font-bold tracking-tight hover:text-yellow-400 transition">
          WORLD ATLAS
        </NavLink>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-8 text-[16px] font-medium">
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
