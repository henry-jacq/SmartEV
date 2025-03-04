import React, { useState } from "react";
import axios from "axios";

const GridStability = () => {
    const [formData, setFormData] = useState({
        num_chargers: "",
        charging_type: "",
        charging_power: "",
        charging_time: "",
        voltage_level: "",
        current_flow: "",
        power_consumed: "",
        power_loss: "",
        predicted_power_demand: "",
        optimized_charging_power: "",
        grid_stability_score: "",
        voltage_fluctuation: "",
    });

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]:
                name === "grid_stability_score" ? parseFloat(value) || "" :
                    isNaN(value) ? value : Number(value),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResponse(null);

        try {
            const apiUrl = "http://127.0.0.1:5001/grid"; // Update API URL
            const res = await axios.post(apiUrl, formData);
            setResponse(res.data["message"]);
        } catch (err) {
            setError(err.response?.data?.message || "API request failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Grid Stabilty Check</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {Object.keys(formData).map((key) => (
                    <div key={key}>
                        <label className="block text-gray-700 font-medium capitalize">
                            {key.replace(/_/g, " ")}
                        </label>
                        <input
                            type="text"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition"
                >
                    {loading ? "Submitting..." : "Submit Data"}
                </button>
            </form>

            {error && <p className="mt-4 text-red-500">{error}</p>}
            {response && (
                <div className="mt-6 p-4 bg-gray-100 rounded-md">
                    <h3 className="font-semibold text-gray-700">API Response:</h3>
                    <pre className="text-sm text-gray-600">{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default GridStability;
