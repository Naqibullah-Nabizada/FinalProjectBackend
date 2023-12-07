import express from "express";
import { getUserLogs } from "../controllers/LogController.js";

const router = express.Router();

router.get("/logs", getUserLogs)

export default router;