import express from "express";
import { PeakHours } from "../controllers/peakhours.controller.js";

const router = express.Router();

router.post("/peakhours", PeakHours);

export default router;
