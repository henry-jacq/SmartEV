import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">GridCharge</h1>
                <ul className="flex gap-4">
                    <li className="hover:underline cursor-pointer">Login</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;