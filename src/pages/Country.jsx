import React from "react";
import { useGlobalcontext } from "../components/Ui/Context";
import { NavLink } from "react-router-dom";

const CountryList = () => {
  const { countryData, isLoading, query, setQuery } = useGlobalcontext();

  return (
    <section className="py-10 px-4">
      
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search countries..."
          value={query === "default" ? "" : query}
          onChange={(e) => setQuery(e.target.value || "default")}
          className="w-full px-6 py-3 rounded-full bg-white/10 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white transition-all"
        />
      </div>

      
      {isLoading ? (
        <div className="text-center text-white text-xl font-semibold">Loading...</div>
      ) : countryData.length === 0 ? (
        <div className="text-center text-white/60 text-lg mt-10">
          No countries found for "{query}"
        </div>
      ) : (
        <div
          className={`flex flex-wrap gap-10 ${
            countryData.length === 1 ? "justify-center" : "justify-between"
          }`}
        >
          {countryData.map((country) => {
            const {
              name: { common } = {},
              flags: { png, alt } = {},
              region,
              subregion,
              population,
              cca3,
              capital,
              continents,
              altSpellings,
            } = country;

            return (
              <NavLink
                to={`/country/${cca3}`}
                key={cca3}
                className="w-[380px] h-[480px] rounded-3xl border border-white/30 bg-white/5 backdrop-blur-md shadow-2xl hover:shadow-white/30 hover:translate-y-1 transition-all duration-300 group overflow-hidden"
              >
                <div className="flex flex-col h-full justify-between">
                  
                  <div>
                    <h2 className="text-center text-lg font-semibold my-4 text-white group-hover:scale-105 transition-transform">
                      {common?.length > 15 ? `${common.substring(0, 15)}...` : common}
                    </h2>
                    
                    <div className="overflow-hidden rounded-xl flex justify-center">
                      <img
                        src={png}
                        alt={alt || `Flag of ${common}`}
                        className="w-[240px] h-[120px] object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  
                  <div className="px-5 pb-5 text-sm text-white/80 space-y-1">
                    <p><strong>Capital:</strong> {capital?.[0] || "N/A"}</p>
                    <p><strong>Region:</strong> {region || "N/A"}</p>
                    <p><strong>Subregion:</strong> {subregion || "N/A"}</p>
                    <p><strong>Continent:</strong> {continents?.[0] || "N/A"}</p>
                    <p><strong>Population:</strong> {population?.toLocaleString() || "N/A"}</p>
                    <p><strong>Also known as:</strong> {altSpellings?.slice(0, 3).join(", ") || "—"}</p>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default CountryList;
