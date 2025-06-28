import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routeOrder = ["/", "/condominium-info", "/add-property-info", "/choose-plan"];
  const currentIndex = routeOrder.indexOf(location.pathname);

  if (currentIndex === 0) return null; // Don't show on first page

  return (
    <button
      onClick={() => navigate(routeOrder[currentIndex - 1])}
      style={{
        backgroundColor: "#6c757d",
        color: "#fff",
        padding: "8px 16px",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        marginBottom: 20,
      }}
    >
      ← Back
    </button>
  );
};

export default BackButton;
