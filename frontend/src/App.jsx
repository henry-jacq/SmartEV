import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Logout from "./pages/Logout";
import StationDashboard from "./pages/StationDashboard";
import GridDashboard from "./pages/GridDashboard";
import Heatmaps from "./pages/Heatmaps";

import Alerts from "./pages/Alerts";
import PeakHour from "./pages/PeakHours";
import Analytics from "./pages/Analytics";
import NotFoundPage from "./pages/NotFoundPage";
import GridStability from "./pages/gridStability";

const Layout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login"]; // Hide Navbar on the login page

  return (
    <div className="min-h-screen bg-gray-100">
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Grid (Distributor) Routes */}
        <Route path="/grid/dashboard" element={<GridDashboard />} />
        <Route path="/grid/heatmaps" element={<Heatmaps />} />
        <Route path="/grid/status" element={<GridStability />} />
        <Route path="/grid/alerts" element={<Alerts />} />

        {/* Charging Station Routes */}
        <Route path="/station/dashboard" element={<StationDashboard />} />
        <Route path="/station/peak-hours" element={<PeakHour />} />
        <Route path="/station/analytics" element={<Analytics />} /> 




        {/* Logout Redirects */}
        <Route path="/grid/logout" element={<Logout />} />
        <Route path="/station/logout" element={<Logout />} />

        {/* Catch-all route for undefined pages */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Layout />
  );
}

export default App;
