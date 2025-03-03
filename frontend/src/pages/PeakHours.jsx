import React, { useState } from "react";
import axios from "axios";
import { useAppContext } from "../context/Context";

const PeakHour = () => {
    const { apiUrl } = useAppContext();
    const [date, setDate] = useState("");
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to handle API request
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
            const response = await axios.get(`${apiUrl}/data`, {
                params: { date } // Axios automatically handles query parameters
            });
            setResponseData(response.data);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to fetch data");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Enter Date (DD-MM)</h2>

            {/* Date Input */}
            <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="DD-MM"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-center"
            />

            {/* Submit Button */}
            <button
                onClick={fetchData}
                className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition"
            >
                Fetch Data
            </button>

            {/* Loading Indicator */}
            {loading && <p className="mt-4 text-gray-500">Loading...</p>}

            {/* Error Message */}
            {error && <p className="mt-4 text-red-500">{error}</p>}

            {/* Display API Response */}
            {responseData && (
                <div className="mt-6 p-4 bg-gray-100 rounded-md">
                    <h3 className="font-semibold text-gray-700">Response:</h3>
                    <pre className="text-sm text-gray-600">{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default PeakHour;
