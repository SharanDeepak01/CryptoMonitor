import React, { useContext, useState, useEffect } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  let { getSearchResult } = useContext(CryptoContext);
  let { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext);

  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
  };

  const selectCoin = (coin) => {
    setCoinSearch(coin);
    setSearchText("");
    setSearchData();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchResult(searchText);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchText !== "") {
        getSearchResult(searchText);
      }
    }, 200);
    return () => clearTimeout(timerId);
  }, [searchText]);

  return (
    <>
      <form
        className="lg:w-80 w-11/12 sm:w-10/12 relative flex items-center mr-2 ml-7 lg:pt-4 md:pt-1 font-nunito"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="search"
          value={searchText}
          onChange={handleInput}
          placeholder="Search here..."
          className="w-full rounded bg-gray-200
      placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan"
        ></input>
        <button className="absolute right-1 cursor-pointer" type="submit">
          <img className="w-full h-auto" src={searchIcon} alt="search" />
        </button>
      </form>

      {searchText.length > 0 ? (
        <ul
          className="absolute top-11 left-0 w-96 h-96 rounded 
        overflow-x-hidden py-2 bg-gray-200 bg-opacity-90
         backdrop:-blur-md scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200"
        >
          {searchData?.coins ? (
            searchData?.coins?.map((coin) => {
              return (
                <li
                  className="flex items-center ml-4 mx-1.5 cursor-pointer"
                  key={coin.id}
                  onClick={() => selectCoin(coin.id)}
                >
                  <img
                    className="w-[1.2rem] h-[1.2rem] mx-2"
                    src={coin.thumb}
                    alt={coin.name}
                  />
                  <span>{coin.name}</span>
                </li>
              );
            })
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200
            animate-spin "
                role="status"
              />
              <span className="ml-2">Searching...</span>
            </div>
          )}
        </ul>
      ) : null}
    </>
  );
};
