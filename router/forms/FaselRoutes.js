import express from "express";

import { createFasel, getFasel } from "../../controllers/forms/FaselController.js";

const router = express.Router();

//! Child Bob
router.get("/Fasel", getFasel);
router.post("/Fasel", createFasel);
// router.get("/BV/buildings:search", searchBV);
// router.get("/BV/buildings/:id", getSingleBV);
// router.put("/BV/:id", pendanteBV);
// router.put("/BV/buildings/:id", updateBV);
// router.delete("/BV/:id", deleteBV);

export default router;