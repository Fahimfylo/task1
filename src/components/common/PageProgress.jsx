import { useLocation } from "react-router-dom";

const steps = [
  { path: "/condominium-info", label: "Info" },
  { path: "/condominium-summary", label: "Summary" },
  { path: "/choose-plan", label: "Plan" }, 
];

const PageProgress = () => {
  const location = useLocation();
  const currentIndex = steps.findIndex(
    (step) => step.path === location.pathname
  );

  if (currentIndex === -1) return null;

  return (
    <div className="w-full max-w-[1440px] px-4">
      <div className="flex space-x-4">
        {steps.map((step, index) => (
          <div
            key={step.path}
            className={`flex-1 h-1 rounded ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PageProgress;
