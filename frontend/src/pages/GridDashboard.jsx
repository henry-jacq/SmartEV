import React from "react";
import StatsCard from "../components/StatsCard";

const stats = [
    { id: 1, name: 'Active Stations', value: '12' },
    { id: 2, name: 'Current Load', value: '320kW' },
    { id: 3, name: 'Peak Demand', value: '450' },
]

const GridDashboard = () => {
            
        
    return (
        <div className="py-24 bg-white sm:py-32">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <dl className="grid grid-cols-1 text-center gap-x-8 gap-y-16 lg:grid-cols-3">
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