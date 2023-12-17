import { createContext, useEffect, useState } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState();
  const [searchData, setSearchData] = useState();
  const [coinData, setCoinData] = useState();
  const [coinSearch, setCoinSearch] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const getCoinData = async (coinId) => {
    setCoinData();
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
      );
      const value = await data.json();
      setCoinData(value);
    } catch (error) {
      console.log(error);
    }
  };

  const getCryptoData = async () => {
    setCryptoData();
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      );
      const value = await data.json();
      setCryptoData(value);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchResult = async (query) => {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
      const value = await data.json();
      setSearchData(value);
      console.log(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCryptoData();
  }, [coinSearch, currency, sortBy, page, perPage]);

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        getSearchResult,
        setCoinSearch,
        setSearchData,
        currency,
        setCurrency,
        setSortBy,
        sortBy,
        page,
        setPage,
        perPage,
        setPerPage,
        getCoinData,
        coinData,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
