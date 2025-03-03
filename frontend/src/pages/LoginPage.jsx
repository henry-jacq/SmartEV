import React from "react";

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
                {/* Logo and Title */}
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-semibold text-gray-800">GridCharge</h1>
                </div>

                {/* Error Message */}
                <div id="error_message" className="hidden p-3 mb-4 text-sm text-red-700 transition-opacity duration-500 ease-in-out bg-red-100 border border-red-200 rounded-md opacity-0">
                    Invalid login credentials. Please try again.
                </div>

                {/* Login Form */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                        Login
                    </button>
                </form>
                {/* <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">Don't have an account? <a href="/signup" className="text-indigo-600 underline hover:text-indigo-800">Sign up</a></p>
                </div> */}
            </div>
        </div>
    );
};

export default LoginPage;
