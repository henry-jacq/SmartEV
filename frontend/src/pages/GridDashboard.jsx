import React from "react";
import StatsCard from "../components/StatsCard";

const stats = [
    { id: 1, name: 'Active Stations', value: '12' },
    { id: 2, name: 'Current Load', value: '320 kW' },
    { id: 3, name: 'Peak Demand', value: '450 kW' },
    { id: 4, name: 'Total Energy Supplied', value: '1.2 MWh' },
    { id: 5, name: 'Total Charging Sessions', value: '154' },
    { id: 6, name: 'Average Charging Time', value: '45 min' },
    { id: 7, name: 'Battery Storage Level', value: '78%' },
    { id: 8, name: 'Revenue Generated', value: '$4,500' },
    { id: 9, name: 'Fault Reports', value: '3 Issues' },
];

const GridDashboard = () => {
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
}

export default GridDashboard;
