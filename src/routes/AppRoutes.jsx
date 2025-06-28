// In AppRoutes.jsx or your main layout component
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Home from "../pages/Home";
import CondominiumInfo from "../pages/CondominiumInfo";
import AddPropertyInfo from "../pages/AddPropertyInfo";
import ChoosePlan from "../pages/ChoosePlan";
import PageProgress from "../components/common/PageProgress";

const AppRoutes = () => {
  const [hasPermission, setHasPermission] = useState(false);

  return (
    <Router>
      <div className="max-w-[1440px] mx-auto flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-5">
          <Routes>
            {/* Pass props down to Home */}
            <Route
              path="/"
              element={<Home hasPermission={hasPermission} setHasPermission={setHasPermission} />}
            />
            <Route path="/condominium-info" element={<CondominiumInfo />} />
            <Route path="/add-property-info" element={<AddPropertyInfo />} />
            <Route path="/choose-plan" element={<ChoosePlan />} />
          </Routes>
        </main>
        <Footer hasPermission={hasPermission} />
      </div>
    </Router>
  );
};

export default AppRoutes;
