import React, { useState, useEffect } from "react";
import axios from "axios";
import Progress from "../components/ui/Progress";
import Card, { CardContent } from "../components/ui/Card";
import { motion } from "framer-motion";

const dummyData = [
    {
        num_chargers: 2,
        charging_type: "Fast",
        charging_power: 100,
        charging_time: 60,
        voltage_level: 200,
        current_flow: 80,
        power_consumed: 10,
        power_loss: 500,
        predicted_power_demand: 6000,
        optimized_charging_power: 4000,
        grid_stability_score: 0.3,
        voltage_fluctuation: 2.0
    },
    {
        num_chargers: 2,
        charging_type: "Fast",
        charging_power: 100,
        charging_time: 60,
        voltage_level: 200,
        current_flow: 80,
        power_consumed: 10,
        power_loss: 500,
        predicted_power_demand: 6000,
        optimized_charging_power: 4000,
        grid_stability_score: 0.3,
        voltage_fluctuation: 2.0
    },
    {
        num_chargers: 1,
        charging_type: "Fast",
        charging_power: 100,
        charging_time: 60,
        voltage_level: 200,
        current_flow: 80,
        power_consumed: 5000,
        power_loss: 500,
        predicted_power_demand: 6000,
        optimized_charging_power: 4000,
        grid_stability_score: 0.3,
        voltage_fluctuation: 2.0
    }
];


const GridStability = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [apiResponse, setApiResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        startSimulation();
    }, [currentIndex]);

    const startSimulation = () => {
        setProgress(0);
        setApiResponse(null);
        setError(null);

        let interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    fetchPrediction(dummyData[currentIndex]);
                    return 100;
                }
                return prev + 10;
            });
        }, 500);
    };

    const fetchPrediction = async (data) => {
        try {
            const res = await axios.post("http://127.0.0.1:5001/grid", data);
            setApiResponse(res.data);
        } catch (err) {
            setError("API request failed.");
        }
    };

    const handleNext = () => {
        setCurrentIndex(Math.floor(Math.random() * dummyData.length));
    };

    const stabilityScore = apiResponse?.grid_stability_score || dummyData[currentIndex].grid_stability_score;
    const chargingStatus = stabilityScore > 80 ? "Charging is Stable" : "Redirect to Next Charger";

    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
            <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-xl">
                <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Grid Stability Simulation</h2>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="p-6 border rounded-lg shadow-md bg-gray-50">
                        <CardContent>
                            <div className="flex flex-col pb-3 space-y-2">
                                <h3 className="text-lg font-semibold text-gray-700">Station {currentIndex + 1}</h3>
                                <p className="text-sm text-gray-600">{dummyData[currentIndex].num_chargers} Chargers | {dummyData[currentIndex].charging_type} Charging</p>
                                <p className="text-sm text-gray-600">Voltage: {dummyData[currentIndex].voltage_level}V | Current: {dummyData[currentIndex].current_flow}A</p>
                                <p className="text-sm text-gray-600">Power: {dummyData[currentIndex].charging_power} kW | Charging Time: {dummyData[currentIndex].charging_time} mins</p>
                                <p className="text-sm text-gray-600">Predicted Demand: {dummyData[currentIndex].predicted_power_demand} kW | Optimized Power: {dummyData[currentIndex].optimized_charging_power} kW</p>
                            </div>
                            <Progress className="mt-6" value={progress} />
                        </CardContent>
                    </Card>
                </motion.div>
                {apiResponse && (
                    <div className="p-4 mt-6 bg-gray-100 rounded-md">
                        <pre className="text-sm text-gray-600">Info: {apiResponse.message}</pre>
                    </div>
                )}
                {error && <p className="mt-4 text-center text-red-500">{error}</p>}
                <button
                    className="w-full px-4 py-2 mt-6 text-white transition bg-indigo-600 rounded-md hover:bg-indigo-500"
                    onClick={handleNext}
                >
                    Next Station
                </button>
            </div>
        </div>
    );
};

export default GridStability;
