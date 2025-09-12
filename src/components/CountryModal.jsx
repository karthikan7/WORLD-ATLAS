import { useEffect, useState } from "react";


const CountryModal = ({ countryName, setShow }) => {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getCountryDetails() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName?.toLowerCase()}?fullText=true`
      );
      const data = await res.json();
      setCountryData(data[0]);
    } catch (error) {
      console.error("Failed to fetch country data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCountryDetails();
  }, [countryName]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div className="relative bg-zinc-800 text-white rounded-3xl shadow-2xl w-full max-w-md p-6">
        {loading ? (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10 flex items-center justify-center text-white text-lg font-semibold">
            Loading...
          </div>
        ) : (
          <>
            <img
              src={countryData?.flags?.png}
              alt={`Flag of ${countryName}`}
              className="w-full h-54 object-cover rounded-xl shadow-md"
            />
            <p className="text-2xl font-semibold text-center mt-2">{countryName}</p>
            <p className="text-sm text-zinc-400 text-center italic">
              POPULATION: {countryData?.population?.toLocaleString()}
            </p>
            <p className="text-sm text-zinc-400 text-center italic">
              REGION: {countryData?.region}
            </p>
            <p className="text-sm text-zinc-400 text-center italic">
              CAPITAL: {countryData?.capital?.[0] || "N/A"}
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShow(false)}
                className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded transition"
              >
                GO BACK
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CountryModal;
