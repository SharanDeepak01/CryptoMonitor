import React from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import { TrendingProvider } from "../context/TrendingContext";
import { StorageProvider } from "../context/storageContext";

export const Home = () => {
  return (
    <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
          <main className="w-full h-full relative flex flex-col content-center items-center text-white font-nunito">
            <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
            <Logo />
            <Navigation />
            <Outlet />
          </main>
        </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
  );
};
