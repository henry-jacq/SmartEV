import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    // Define menu items based on route
    let navItems = [];

    if (location.pathname === "/") {
        navItems = [{ name: "Login", path: "/login" }];
    } else if (location.pathname.startsWith("/grid")) {
        navItems = [
            { name: "Dashboard", path: "/grid/dashboard" },
            { name: "Heatmaps", path: "/grid/heatmaps" },
            { name: "Grid Status", path: "/grid/status" },
            { name: "Alerts", path: "/grid/alerts" },
            { name: "Logout", path: "/grid/logout"},
        ];
    } else if (location.pathname.startsWith("/station")) {
        navItems = [
            { name: "Dashboard", path: "/station/dashboard" },
            { name: "Peak Hours", path: "/station/peak-hours" },
            { name: "Analytics", path: "/station/analytics" },
            { name: "Logout", path: "/station/logout" },
        ];
    }

    return (
        <nav className="p-4 text-white bg-gray-600 shadow-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">GridCharge</h1>
                <ul className="flex space-x-4">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link to={item.path} className="hover:underline">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
