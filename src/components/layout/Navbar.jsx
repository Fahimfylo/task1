import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="w-full items-center h-[79px] mx-auto border-b flex justify-between border-gray-300 pb-5">
      <img
        src="/images/logo.png"
        alt=""
        className="pl-24 pt-5"
      />

      <button className="border font-semibold border-gray-300 rounded-[12px] mr-24 mt-5 px-5 h-[47px]">
        {isHome ? "Exit" : "Save & Exit"}
      </button>
    </nav>
  );
};

export default Navbar;
