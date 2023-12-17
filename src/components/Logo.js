import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <div className="absolute top-1 left-1 flex items-center">
        <img src={logo} alt="logo" />
        <span className="text-md text-cyan">CryptoMoniter</span>
      </div>
    </Link>
  );
};
