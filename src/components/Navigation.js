import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="lg:w-[40%] w-[80%] mt-16 flex justify-around align-middle border border-cyan rounded-lg md:mt-28 sm:w-[80%]">
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5
          ${
            isActive
              ? "bg-cyan text-gray-300"
              : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300 border-0 cursor-pointer rounded capitalize font-semibold"
          }`;
        }}
      >
        Crypto
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5
          ${
            isActive
              ? "bg-cyan text-gray-300"
              : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300 border-0 cursor-pointer rounded capitalize font-semibold"
          }`;
        }}
      >
        trending
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5
          ${
            isActive
              ? "bg-cyan text-gray-300"
              : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300 border-0 cursor-pointer rounded capitalize font-semibold"
          }`;
        }}
      >
        saved
      </NavLink>
    </nav>
  );
};
