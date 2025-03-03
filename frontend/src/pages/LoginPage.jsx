import React from "react";

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            {/* Login Form */}
            <div className="w-full max-w-md p-8 mt-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                <p className="mt-2 text-sm text-center text-gray-500">Access your account</p>

                <form className="mt-6 space-y-4">
                    <div>
                        <label className="block mb-1 text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                        Sign In
                    </button>
                </form>

                <p className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
                </p>
            </div>

        </div>
    );
};

export default LoginPage;
