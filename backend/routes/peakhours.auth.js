import express from "express";
import { getPeakHours } from "../controllers/peakhours.controller.js";

const router = express.Router();

router.post("/getpeakhours", getPeakHours);

export default router;
