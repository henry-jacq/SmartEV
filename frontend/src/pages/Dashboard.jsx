import React from "react";
import StatsCard from "../components/StatsCard";

const Dashboard = () => {
    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatsCard title="Active Stations" value="12" />
                <StatsCard title="Current Load" value="320 kW" />
                <StatsCard title="Peak Demand" value="450 kW" />
            </div>
        </div>
    );
};

export default Dashboard;