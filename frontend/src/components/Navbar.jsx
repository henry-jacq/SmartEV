import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    // Define menu items based on route
    let navItems = [];

    if (location.pathname === "/") {
        // Home Page - Only Show Login
        navItems = [{ name: "Login", path: "/login" }];
    } else if (location.pathname.startsWith("/grid")) {
        navItems = [
            { name: "Overview", path: "/grid/dashboard" },
            { name: "Analytics", path: "/grid/analytics" },
            { name: "Settings", path: "/grid/settings" },
        ];
    } else if (location.pathname.startsWith("/station")) {
        navItems = [
            { name: "Dashboard", path: "/station/dashboard" },
            { name: "Live Data", path: "/station/live-data" },
            { name: "Reports", path: "/station/reports" },
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
