import express from "express";

import { createMAFees, deleteMAFees, getMAFees, searchMAFees, singleMAFees, updateMAFees } from "../../controllers/income/MAFeesController.js";

const router = express.Router();

router.get("/MAFees", getMAFees);
router.get("/MAFees/:id", singleMAFees);
router.get("/MAFees/:search", searchMAFees);
router.post("/MAFees", createMAFees);
router.put("/MAFees/:id", updateMAFees);
router.delete("/MAFees/:id", deleteMAFees);

export default router;