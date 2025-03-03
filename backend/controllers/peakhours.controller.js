import axios from "axios";

export const PeakHours = async (req, res) => {
    try {
        const { date } = req.body; // Expecting date in "DD-MM" format

        // Send the correct request to Flask API
        const response = await axios.post("http://127.0.0.1:5001/peakhours", { date });

        // Flask API returns an array of peak hours, so return it properly
        res.json({ peak_hours: response.data.predicted_peak_hours || [] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
