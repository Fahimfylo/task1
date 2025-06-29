import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageProgress from "../common/PageProgress"; // adjust path as needed

const Footer = ({ hasPermission }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const routeOrder = [
    "/",
    "/condominium-info",
    "/condominium-summary",
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
    <footer
      className={`w-full flex flex-col gap-5 max-w-[1440px] mx-auto py-5 ${
        isHome ? "" : ""
      }`}
      style={
        isHome
          ? {
              boxShadow: "0 -6px 12px -6px rgba(0, 0, 0, 0.1)",
            }
          : {}
      }
    >
      <PageProgress />

      <div className="w-full max-w-[1440px] flex justify-between">
        <p
          disabled={currentIndex === 0}
          onClick={() => navigate(routeOrder[currentIndex - 1])}
          className="py-2 underline font-semibold cursor-pointer disabled:cursor-not-allowed disabled:opacity-50  md:ml-5 lg:ml-20 sm:ml-0"
        >
          Back
        </p>

        {!isLastPage && (
          <button
            onClick={handleNext}
            disabled={!hasPermission}
            className={`px-5 py-2 text-white rounded-[13px]  transition-colors md:mr-5 lg:mr-20 sm:mr-0 ${
              hasPermission
                ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                : "bg-blue-200 cursor-not-allowed"
            }`}
          >
            {isHome ? "Get Started" : "Next"}
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
