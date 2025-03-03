import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import peakHoursRoutes from "./routes/peakhours.auth.js";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", peakHoursRoutes);

app.get("/", (req, res) => {
    res.send("Hello everyone");
});

// Start the server
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
