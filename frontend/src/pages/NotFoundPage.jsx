import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-red-600">404</h1>
            <p className="mb-4 text-gray-600">Page not found.</p>
            <Link to="/" className="text-blue-500 hover:underline">Go back to Home</Link>
        </div>
        
    );
};

export default NotFoundPage;
