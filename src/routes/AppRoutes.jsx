import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Home from "../pages/Home";
import CondominiumInfo from "../pages/CondominiumInfo";
import CondoSummary from "../pages/CondoSummary";
import ChosenPlan from "../pages/ChosenPlan";

const AppRoutes = () => {
  const [hasPermission, setHasPermission] = useState(false);

  return (
    <Router>
      <div className="max-w-[1440px] mx-auto flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-5">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  hasPermission={hasPermission}
                  setHasPermission={setHasPermission}
                />
              }
            />
            <Route path="/condominium-info" element={<CondominiumInfo />} />
            <Route path="/condominium-summary" element={<CondoSummary />} />
            <Route path="/choose-plan" element={<ChosenPlan />} />
          </Routes>
        </main>
        <Footer hasPermission={hasPermission} />
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                minWidth: "150px",
                minHeight: "60px",
                padding: "16px",
                fontSize: "16px",
                borderRadius: "12px",
                background: "#ecfdf5",
                color: "#065f46",
              },
            },
          }}
        />
      </div>
    </Router>
  );
};

export default AppRoutes;
