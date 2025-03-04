import React from "react";

const stats = [
    { id: 1, name: "Total Charging Points", value: "20" },
    { id: 2, name: "Occupied Charging Points", value: "14" },
    { id: 3, name: "Available Charging Points", value: "6" },
    { id: 4, name: "Current Power Draw", value: "450 kW" },
    { id: 5, name: "Total Energy Delivered Today", value: "3.2 MWh" },
    { id: 6, name: "Average Charging Duration", value: "45 mins" },
    { id: 7, name: "Fast Chargers (DC)", value: "8" },
    { id: 8, name: "Slow Chargers (AC)", value: "12" },
    { id: 9, name: "Revenue Generated Today", value: "₹75,000" },
    { id: 10, name: "Pending Maintenance Issues", value: "2" },
    { id: 11, name: "Total Vehicles Charged Today", value: "85" },
    { id: 12, name: "CO₂ Emission Saved Today", value: "1.5 tons" },
];

const StationDashboard = () => {
    return (
        <div className="py-24 bg-white sm:py-32">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <dl className="grid grid-cols-1 text-center gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col max-w-xs mx-auto gap-y-4">
                            <dt className="text-gray-600 text-base/7">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>  
    );
};

export default StationDashboard;
