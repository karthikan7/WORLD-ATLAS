import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CountryModal = ({ countryName, setShow }) => {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  async function getCountryDetails() {
    //2
    setLoading(true);
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName?.toLocaleLowerCase()}?fullText=true`
    );
    const data = await res.json();
    console.log(data);
    setLoading(false);
    setCountryData(data[0]);
  }
  //1st
   useEffect(() => {
    getCountryDetails();
  }, [countryName]);

  return (
    <div className="fixed flex overflow-hidden rounded-b-4xl rounded-t-4xl flex-col gap-2 top-1/2 p-6 rounded-lg bg-zinc-800 text-white z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      {loading && (
        <div className="absolute inset-0 bg-black z-15 flex items-center justify-center">
          Loading..
        </div>
      )}
      <img src={countryData?.flags?.png} alt="" />
      <p className="text-2xl font-semibold text-center">{countryName}</p>
      <p className="text-sm text-zinc-400 text-center italic">POPULATION: {countryData?.population?.toLocaleString()}</p>
      <p className="text-sm text-zinc-400 text-center italic">REGION: {countryData?.region}</p>
       <p className="text-sm text-zinc-400 text-center italic">CAPITAL: {countryData?.capital}</p>
    <div className="flex justify-center mt-4">

    <NavLink
  to="/"
  onClick={() => setShow(false)}
  className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded text-white transition"
>
  GO BACK
</NavLink>
</div>
</div>

  );
};

export default CountryModal;
