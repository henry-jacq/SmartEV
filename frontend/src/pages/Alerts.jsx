import React from "react";

const alertsData = [
    { id: 1, station: "Station A", overload: "110%", incentive: "₹16,500" },
    { id: 2, station: "Station B", overload: "125%", incentive: "₹28,800" },
    { id: 3, station: "Station C", overload: "140%", incentive: "₹41,200" },
    { id: 4, station: "Station D", overload: "105%", incentive: "₹12,400" },
    { id: 5, station: "Station E", overload: "120%", incentive: "₹24,600" },
    { id: 6, station: "Station F", overload: "135%", incentive: "₹37,000" },
];

const Alerts = () => {
    return (
        <div className="max-w-4xl p-8 mx-auto mt-12 bg-white shadow-lg rounded-xl">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
                <span className="underline decoration-blue-500">Alerts</span>
            </h2>
            <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto">
                Stay updated with real-time notifications on grid and station anomalies.
            </p>


            {alertsData.length > 0 ? (
                <div className="overflow-hidden border border-gray-200 rounded-lg">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-gray-700 text-lg">Station</th>
                                <th className="px-6 py-4 text-gray-700 text-lg">Overload</th>
                                <th className="px-6 py-4 text-gray-700 text-lg">Incentive</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alertsData.map((alert, index) => (
                                <tr
                                    key={alert.id}
                                    className={`border-t ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition`}
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900 text-lg">{alert.station}</td>
                                    <td className="px-6 py-4 text-red-600 font-semibold text-lg">{alert.overload}</td>
                                    <td className="px-6 py-4 text-green-600 font-semibold text-lg">{alert.incentive}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="mt-6 text-green-600 text-lg">✅ No current overload issues.</p>
            )}
        </div>
    );
};

export default Alerts;
