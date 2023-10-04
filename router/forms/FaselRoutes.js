import express from "express";

import { createFasel, getFasel, getSingleFasel, searchFasel, updateFasel } from "../../controllers/forms/FaselController.js";

const router = express.Router();

//! Child Bob
router.get("/Fasel", getFasel);
router.get("/Fasel/:search", searchFasel);
router.get("/single-Fasel/:id", getSingleFasel);
router.post("/Fasel", createFasel);
router.put("/Fasel/:id", updateFasel);

export default router;