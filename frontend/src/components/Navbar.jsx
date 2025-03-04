import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    // Define menu items based on route
    let navItems = [];

    if (location.pathname === "/") {
        navItems = [
            {
                name: "Login",
                path: "/login",
                icon: <FaSignInAlt className="inline mr-1 text-xl" />, // Increased icon size
            },
        ];
    } else if (location.pathname.startsWith("/grid")) {
        navItems = [
            { name: "Dashboard", path: "/grid/dashboard" },
            { name: "Heatmaps", path: "/grid/heatmaps" },
            { name: "Grid Stability", path: "/grid/status" },
            { name: "Alerts", path: "/grid/alerts" },
            { name: "Logout", path: "/grid/logout" },
        ];
    } else if (location.pathname.startsWith("/station")) {
        navItems = [
            { name: "Dashboard", path: "/station/dashboard" },
            { name: "Peak Hours", path: "/station/peak-hours" },
            // { name: "Analytics", path: "/station/analytics" },
            { name: "Logout", path: "/station/logout" },
        ];
    }

    return (
        <nav className="px-10 py-6 bg-gray-800 shadow-lg">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <h1 className="text-3xl font-bold tracking-wide text-white">
                    GridCharge
                </h1>

                {/* Navigation Items */}
                <ul className="flex space-x-8">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className={`text-xl font-medium justify-center align-middle transition ${location.pathname === item.path
                                        ? "text-indigo-400 font-semibold"
                                        : "text-white hover:text-indigo-300"
                                    }`}
                            >
                                {item.icon} {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
