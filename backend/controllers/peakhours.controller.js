import axios from "axios";

export const getPeakHours = async (req, res) => {
    try {
        const { date } = req.body;
        const response = await axios.post("http://127.0.0.1:5001/predict", { date });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
