import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* Hero Section */}
            <header className="bg-blue-600 text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Smart Grid Stabilization & Dynamic Charging Prediction</h1>
                <p className="mt-4 text-lg">Optimizing power distribution for a sustainable EV future</p>
            </header>

            {/* Features Section */}
            <section className="py-16 px-8">
                <h2 className="text-3xl font-bold text-center">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold">For Grid Owners</h3>
                        <ul className="list-disc list-inside mt-4 text-gray-700">
                            <li>Real-time power demand forecasting</li>
                            <li>Dynamic supply distribution based on demand</li>
                            <li>Grid stability monitoring and alerts</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold">For Charging Stations</h3>
                        <ul className="list-disc list-inside mt-4 text-gray-700">
                            <li>Predictive analytics for peak charging hours</li>
                            <li>Energy usage insights and cost optimization</li>
                            <li>Seamless grid interaction and load balancing</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-600 text-white py-16 text-center">
                <h2 className="text-2xl font-bold">Join the Future of Smart EV Charging</h2>
                <p className="mt-4">Get started today and optimize your energy management</p>
                <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-200">
                    Sign Up Now
                </button>
            </section>
        </div>
    );
};

export default HomePage;
