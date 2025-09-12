import React from "react";
import { useGlobalcontext } from "../components/Ui/Context";

const CountryList = () => {
  const { countryData, isLoading, query, setQuery } = useGlobalcontext();

  return (
    <section className="py-12 px-6 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] min-h-screen">
      <div className="max-w-xl mx-auto mb-12">
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
          className={`flex flex-wrap gap-16 justify-center max-w-[1600px] mx-auto ${
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
              capital,
              continents,
              altSpellings,
            } = country;

            return (
              <div
                key={common}
                className="w-[360px] h-[500px] rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:scale-[1.02] transition-all duration-300 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none rounded-3xl" />

                <div className="flex flex-col h-full justify-between relative z-10">
                  <div>
                    <h2 className="text-center text-xl font-semibold my-5 text-white tracking-wide group-hover:scale-105 transition-transform">
                      {common?.length > 18 ? `${common.substring(0, 18)}...` : common}
                    </h2>

                    <div className="overflow-hidden rounded-xl flex justify-center px-4">
                      <img
                        src={png}
                        alt={alt || `Flag of ${common}`}
                        className="w-[260px] h-[140px] object-contain rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="px-6 pb-6 text-sm text-white/80 space-y-2 leading-relaxed">
                    <p><span className="text-white font-medium">Capital:</span> {capital?.[0] || "N/A"}</p>
                    <p><span className="text-white font-medium">Region:</span> {region || "N/A"}</p>
                    <p><span className="text-white font-medium">Subregion:</span> {subregion || "N/A"}</p>
                    <p><span className="text-white font-medium">Continent:</span> {continents?.[0] || "N/A"}</p>
                    <p><span className="text-white font-medium">Population:</span> {population?.toLocaleString() || "N/A"}</p>
                    <p><span className="text-white font-medium">Also known as:</span> {altSpellings?.slice(0, 3).join(", ") || "—"}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default CountryList;
