import { NavLink } from "react-router-dom";
import footerdetails from "../../api/footerapi.json";

export const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-white py-8 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-[14px] text-white/60 tracking-wide">
          {new Date().getFullYear()} WORLD ATLAS. Designed with precision and curiosity.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white/70">
          {footerdetails.map((details, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <p className="text-lg font-semibold">{details.title}</p>
              <p className="text-sm">{details.details}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 w-full">
          <ul className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
            <li>
              <NavLink to="/" className="hover:text-white transition duration-200">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.instagram.com/karthik/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-200"
              >
                Instagram
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white transition duration-200">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
