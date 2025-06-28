import { useLocation } from "react-router-dom";

const PageProgress = () => {
  const location = useLocation();

  const showProgress = [
    "/condominium-info",
    "/choose-plan",
    "/add-property-info",
  ].includes(location.pathname);

  if (!showProgress) return null;

  return (
    <div className="w-full max-w-[1440px]">
      <div className="flex w-full">
        <div className="h-1 flex-1 bg-black"></div>
        <div className="h-1 flex-1 bg-gray-300 ml-5"></div>
      </div>
    </div>
  );
};

export default PageProgress;
