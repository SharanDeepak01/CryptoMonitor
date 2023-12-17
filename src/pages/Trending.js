import React, { useContext } from "react";
import { TrendingContext } from "../context/TrendingContext";
import TrendingCoin from "../components/TrendingCoin";
import { Outlet } from "react-router-dom";

export const Trending = () => {
  const { trendData } = useContext(TrendingContext);

  return (
    <section className="w-[80%] h-full flex flex-col mb-24 relative">
      <div className="w-full min-h-[60vh] py-8 flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly mt-9 md:border md:border-gray-100 rounded">
        {trendData &&
          trendData.map((coin) => (
            <TrendingCoin key={coin.coin_id} data={coin.item} />
          ))}
      </div>
      <Outlet />
    </section>
  );
};
