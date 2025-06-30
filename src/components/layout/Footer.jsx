import { useLocation, useNavigate } from "react-router-dom";
import PageProgress from "../common/PageProgress";
import toast from "react-hot-toast";

const Footer = ({ hasPermission }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const routeOrder = [
    "/",
    "/condominium-info",
    "/condominium-summary",
    "/choose-plan",
  ];
  const currentIndex = routeOrder.indexOf(location.pathname);
  const isLastPage = currentIndex === routeOrder.length - 1;
  const handleNext = () => {
    if (!isLastPage && hasPermission) {
      navigate(routeOrder[currentIndex + 1]);
    }
  };
  const handlePay = () => {
    toast.success("Payment completed successfully!");
  };

  return (
    <footer
      className={`w-full flex flex-col gap-5 max-w-[1440px] mx-auto py-5 px-4`}
      style={
        isHome
          ? {
              boxShadow: "0 -6px 12px -6px rgba(0, 0, 0, 0.1)",
            }
          : {}
      }
    >
      <PageProgress />
      <div className="w-full flex justify-between items-center">
        <p
          onClick={() =>
            currentIndex > 0 && navigate(routeOrder[currentIndex - 1])
          }
          className={`py-2 underline font-semibold cursor-pointer ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          } ml-2 sm:ml-4 md:ml-5 lg:ml-20`}
        >
          Back
        </p>
        {!isLastPage ? (
          <button
            onClick={handleNext}
            disabled={!hasPermission}
            className={`px-5 py-2 text-white rounded-[13px] transition-colors ml-2 sm:mr-4 md:mr-5 lg:mr-20 ${
              hasPermission
                ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                : "bg-blue-200 cursor-not-allowed"
            }`}
          >
            {isHome ? "Get Started" : "Next"}
          </button>
        ) : (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-[15px] sm:mr-4 md:mr-5 lg:mr-20">
            <div>
              <span className="text-gray-500 font-medium text-sm sm:text-base">
                Total with card charge :{" "}
                <span className="font-medium text-gray-800 text-[16px] sm:text-[18px]">
                  $970
                </span>
              </span>
            </div>
            <button
              onClick={handlePay}
              className="px-5 py-3 text-white bg-blue-500 hover:bg-blue-600 transition rounded-[13px]"
            >
              Pay & add property
            </button>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
