import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen text-gray-900 bg-gray-100">
            {/* Hero Section */}
            <header className="py-16 text-center text-white bg-blue-600">
                <h1 className="text-4xl font-bold">Smart Grid Stabilization & Dynamic Charging Prediction</h1>
                <p className="mt-4 text-lg">Optimizing power distribution for a sustainable EV future</p>
            </header>

            {/* Features Section */}
            <section className="px-8 py-16">
                <h2 className="text-3xl font-bold text-center">Key Features</h2>
                <div className="grid gap-8 mt-8 md:grid-cols-2">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">For Grid Owners</h3>
                        <ul className="mt-4 text-gray-700 list-disc list-inside">
                            <li>Real-time power demand forecasting</li>
                            <li>Dynamic supply distribution based on demand</li>
                            <li>Grid stability monitoring and alerts</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">For Charging Stations</h3>
                        <ul className="mt-4 text-gray-700 list-disc list-inside">
                            <li>Predictive analytics for peak charging hours</li>
                            <li>Energy usage insights and cost optimization</li>
                            <li>Seamless grid interaction and load balancing</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 text-center text-white bg-blue-600">
                <h2 className="text-2xl font-bold">Join the Future of Smart EV Charging</h2>
                <p className="mt-4">Get started today and optimize your energy management</p>
                <button className="px-6 py-3 mt-6 font-bold text-blue-600 bg-white rounded-lg shadow-md hover:bg-gray-200">
                    Sign Up Now
                </button>
            </section>
        </div>
    );
};

export default HomePage;
