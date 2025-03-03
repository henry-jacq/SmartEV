import React from "react";

const Navbar = () => {
    return (
        <nav className="p-4 text-white bg-gray-800 shadow-md">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                <h1 className="text-xl font-bold">GridCharge</h1>
                <ul className="flex gap-4">
                    <li className="cursor-pointer hover:underline">Login</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;