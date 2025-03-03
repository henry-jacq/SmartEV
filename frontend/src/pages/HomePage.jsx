import React from "react";

const HomePage = () => {
    return (
        <div className="min-h-screen text-gray-900 bg-gray-100">
            {/* Hero Section */}
            <header className="flex flex-col items-center justify-center px-6 py-20 text-center text-white bg-gray-800">
                <h1 className="text-5xl font-extrabold leading-tight">
                    Smart Grid Stabilization & EV Charging
                </h1>
                <p className="mt-4 text-lg opacity-90">
                    Optimizing power distribution for a sustainable future
                </p>
                <button className="px-6 py-3 mt-6 text-lg font-semibold text-white transition bg-gray-700 rounded-lg shadow-md hover:bg-gray-600">
                    Get Started
                </button>
            </header>

            {/* Key Features Section */}
            <section className="max-w-6xl px-6 py-20 mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800">Key Features</h2>
                <div className="grid gap-8 mt-10 md:grid-cols-2">
                    <div className="p-6 bg-white border border-gray-300 shadow-md rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">For Grid Owners</h3>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>✅ Real-time power demand forecasting</li>
                            <li>✅ Dynamic supply distribution based on demand</li>
                            <li>✅ Grid stability monitoring and alerts</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-white border border-gray-300 shadow-md rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">For Charging Stations</h3>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>✅ Predictive analytics for peak charging hours</li>
                            <li>✅ Energy usage insights and cost optimization</li>
                            <li>✅ Seamless grid interaction and load balancing</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* How It Works Section */}
            <section className="px-10 py-20 bg-gray-200">
                <h2 className="text-3xl font-bold text-center text-gray-800">How It Works</h2>
                <div className="grid gap-12 mt-12 md:grid-cols-3">
                    <div className="p-8 bg-white shadow-lg rounded-2xl">
                        <h3 className="text-lg font-semibold text-gray-700">📊 Data Collection</h3>
                        <p className="mt-3 text-gray-600">
                            Sensors monitor real-time energy usage.
                        </p>
                    </div>
                    <div className="p-8 bg-white shadow-lg rounded-2xl">
                        <h3 className="text-lg font-semibold text-gray-700">🤖 AI Optimization</h3>
                        <p className="mt-3 text-gray-600">
                            AI predicts demand & adjusts supply.
                        </p>
                    </div>
                    <div className="p-8 bg-white shadow-lg rounded-2xl">
                        <h3 className="text-lg font-semibold text-gray-700">⚡ Smart Charging</h3>
                        <p className="mt-3 text-gray-600">
                            Power is optimized for grid stability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 text-center text-white bg-gray-900">
                <h3 className="text-xl font-semibold">GridCharge</h3>
                <p className="mt-2 text-gray-400">Optimizing power distribution for a sustainable future.</p>
                <p className="mt-4 text-gray-500">&copy; 2025 GridCharge. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
