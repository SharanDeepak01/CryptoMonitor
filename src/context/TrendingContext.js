import { createContext, useEffect, useState } from "react";

export const TrendingContext = createContext({});

export const TrendingProvider = ({ children }) => {
  const [trendData, setTrendData] = useState();

  const getTrendData = async () => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      );
      const value = await data.json();
      setTrendData(value.coins);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendData();
  }, []);

  return (
    <TrendingContext.Provider
      value={{
        trendData,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};
