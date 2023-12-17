import React, { useContext, useState } from "react";
import { Search } from "./Search";
import submitIcon from "../assets/submit-icon.svg";
import { CryptoContext } from "../context/CryptoContext";

export const Filters = () => {
  let { setCurrency, setSortBy } = useContext(CryptoContext);
  const [currencyChange, setCurrencyChange] = useState("");

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    setCurrency(currencyChange);
  };

  const handleSort = (e) => {
    e.preventDefault();
    const val = e.target.value;
    setSortBy(val);
  };

  return (
    <div className="w-full h-12 lg:pt-4 sm:pt-4 sm:pb-20  md:border-2 md:border-gray-100 md:rounded-lg flex flex-col pb-20 sm:flex-col lg:pb-10 md:pb-20 lg:flex-row md:flex-col items-center lg:justify-between relative">
      <Search />
      <div className="flex flex-col py-2 sm:py-0 sm:flex-row mr-7 ml-4 md:pl-10 sm:mt-5">
        <form
          className="relative flex items-center font-nunito mr-12"
          onSubmit={handleCurrencySubmit}
        >
          <label
            htmlFor="currency"
            className="relative flex justify-center items-center mr-1 font-semibold text-sm"
          >
            Currency:
          </label>
          <input
            placeholder="usd"
            className="w-16 rounded bg-gray-200
           placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan leading-4"
            type="text"
            name="currency"
            value={currencyChange}
            onChange={(e) => setCurrencyChange(e.target.value)}
          />
          <button className="cursor-pointer ml-1" type="submit">
            <img className="w-full h-auto" src={submitIcon} alt="submit" />
          </button>
        </form>

        <label className="relative flex items-center mt-2 sm:mt-0 font-semibold mr-2">
          <span className="text-sm">Sort by: </span>
          <select
            name="sortby"
            className="rounded bg-gray-200 text-base font-medium
        pl-2 mx-2 pr-10 py-0.5 leading-4 capitalize cursor-pointer focus:outline-0"
            onClick={handleSort}
          >
            <option value="market_cap_desc">market cap desc</option>
            <option value="market_cap_asc">market cap asc</option>
            <option value="volume_asc">volume asc</option>
            <option value="volume_desc">volume desc</option>
            <option value="id_asc">id asc</option>
            <option value="id_desc">id desc</option>
          </select>
        </label>
      </div>
    </div>
  );
};
