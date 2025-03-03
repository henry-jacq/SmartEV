import { useState } from "react";
import axios from "axios";

function App() {
  const [date, setDate] = useState("");
  const [peakHours, setPeakHours] = useState([]);
  const [error, setError] = useState("");

  const predict = async () => {
    setError("");
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/peakhours", { date });
      setPeakHours(res.data.peak_hours);
    } catch (err) {
      setError("Error fetching peak hours.");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Peak Hour Predictor</h1>
      <input
        type="text"
        placeholder="Enter date (DD-MM)"
        className="p-2 border rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={predict}>
        Predict
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {peakHours.length > 0 && (
        <div className="mt-4 p-4 bg-white shadow rounded">
          <h2 className="font-semibold">Predicted Peak Hours:</h2>
          <p>{peakHours.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default App;
