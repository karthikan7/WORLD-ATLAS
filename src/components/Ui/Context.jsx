import React, { useState, useEffect, createContext, useContext } from "react";

const CountryContext = createContext();

const DEFAULT_COUNTRIES = [
  "IN", "JP", "BR", "DE", "CA", "AU", "FR", "IT", "US", "MX", "ZA", "KR"
];

const API_URL = (query) => {
  if (query === "default") {
    return `https://restcountries.com/v3.1/alpha?codes=${DEFAULT_COUNTRIES.join(",")}`;
  }
  return `https://restcountries.com/v3.1/name/${query.toLowerCase()}?fullText=true`;
};

const CountryProvider = ({ children }) => {
  const [countryData, setCountryData] = useState([]);
  const [query, setQuery] = useState("default");
  const [isLoading, setIsLoading] = useState(true);

  const getCountryData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (Array.isArray(data)) {
        setCountryData(data);
      } else {
        setCountryData([]);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setCountryData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(true);
      getCountryData(API_URL(query.trim() || "default"));
    }, 600);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <CountryContext.Provider value={{ countryData, query, setQuery, isLoading }}>
      {children}
    </CountryContext.Provider>
  );
};

const useGlobalcontext = () => useContext(CountryContext);

export { CountryProvider, useGlobalcontext };
