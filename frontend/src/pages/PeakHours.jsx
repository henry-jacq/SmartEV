import React, { useState } from "react";
import axios from "axios";
import { useAppContext } from "../context/Context";

const PeakHour = () => {
    const { apiUrl } = useAppContext();
    const [date, setDate] = useState("");
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        const dateRegex = /^\d{2}-\d{2}$/; // Format: DD-MM
        if (!date || !dateRegex.test(date)) {
            setError("Please enter a valid date in DD-MM format.");
            return;
        }

        setLoading(true);
        setError(null);
        setResponseData(null);

        try {
            const response = await axios.post(`${apiUrl}`, { date });
            setResponseData(response.data["predicted_peak_hours"]);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch data");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white shadow-xl rounded-xl">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
                    Predict Peak Hours
                </h2>

                <p className="mb-4 text-center text-gray-600">
                    Enter a date to check peak hours for the station.
                </p>

                <div className="mb-6">
                    <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="DD-MM"
                        className="w-full p-3 text-lg text-center border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <button
                    onClick={fetchData}
                    className="w-full px-5 py-3 text-lg font-semibold text-white transition bg-indigo-600 rounded-md hover:bg-indigo-500"
                >
                    Predict
                </button>

                {loading && (
                    <p className="mt-6 text-center text-gray-500">Fetching data...</p>
                )}
                {error && (
                    <p className="mt-6 font-semibold text-center text-red-500">{error}</p>
                )}

                {responseData && responseData.length > 0 && (
                    <div className="p-6 mt-8 rounded-lg shadow-sm bg-gray-50">
                        <h3 className="mb-4 text-lg font-semibold text-center text-gray-700">
                            Predicted Peak Hours
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3 text-lg font-medium text-indigo-700">
                            {responseData.map((hour) => (
                                <span key={hour} className="px-4 py-2 bg-indigo-200 rounded-md">
                                    {hour}:00
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PeakHour;
