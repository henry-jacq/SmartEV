import React from "react";
import { assets } from "../assets/assets";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Heatmaps = () => {
    // Sample Chart Data
    const chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Energy Demand (MW)",
                data: [400, 550, 600, 700, 650, 720],
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4,
            },
        ],
    };

    // Convert assets object into an array
    const sarimaImages = Object.entries(assets).map(([key, src]) => ({
        id: key,
        src,
        alt: `SARIMA Model ${key.split("_")[1]}`,
    }));

    return (
        <div className="max-w-5xl p-6 mx-auto mt-10 bg-white shadow-lg rounded-xl">
            {/* Title & Description */}
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Grid Heatmaps</h2>
            <p className="text-gray-600 mb-6 text-lg">Visual representation of energy demand over time.</p>

            {/* Line Chart */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <Line data={chartData} />
            </div>

            {/* SARIMA Graphs Section */}
            <h3 className="mt-8 text-2xl font-semibold text-gray-800">SARIMA Model Predictions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                <img src={assets.sarima_1} alt="SARIMA Model 001" />
                <img src={assets.sarima_2} alt="SARIMA Model 002" />
                <img src={assets.sarima_3} alt="SARIMA Model 003" />
            </div>
        </div>
    );
};

export default Heatmaps;
