import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = ({ hasPermission }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const routeOrder = [
    "/",
    "/condominium-info",
    "/add-property-info",
    "/choose-plan",
  ];
  const currentIndex = routeOrder.indexOf(location.pathname);
  const isLastPage = currentIndex === routeOrder.length - 1;

  const handleNext = () => {
    if (!isLastPage && hasPermission) {
      navigate(routeOrder[currentIndex + 1]);
    }
  };

  return (
    <footer className="w-full flex justify-between max-w-[1440px] mx-auto border-t border-gray-300 mt-10 p-5">
      <button
        disabled={currentIndex === 0}
        onClick={() => navigate(routeOrder[currentIndex - 1])}
        className="px-6 py-2 rounded border border-gray-400 cursor-pointer hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Back
      </button>

      {!isLastPage && (
        <button
          onClick={handleNext}
          disabled={!hasPermission}
          className={`px-6 py-2 rounded text-white transition-colors ${
            hasPermission
              ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
              : "bg-blue-200 cursor-not-allowed"
          }`}
        >
          Get Started
        </button>
      )}
    </footer>
  );
};

export default Footer;
