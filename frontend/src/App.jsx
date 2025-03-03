import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import StationDashboard from "./pages/StationDashboard";
import GridDashboard from "./pages/GridDashboard";

const Layout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login"]; // Hide Navbar for login page

  return (
    <div className="min-h-screen bg-gray-100">
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/station/dashboard" element={<StationDashboard />} />
        <Route path="/grid/dashboard" element={<GridDashboard />} />
        <Route path="/login" element={<LoginPage />} />
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
