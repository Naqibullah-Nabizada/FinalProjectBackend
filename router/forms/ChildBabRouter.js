import express from "express";

import { createChildBab, getChildBab } from "../../controllers/forms/ChildBabController.js";

const router = express.Router();

//! Child Bob
router.get("/ChildBab", getChildBab);
router.post("/ChildBab", createChildBab);
// router.get("/BV/buildings:search", searchBV);
// router.get("/BV/buildings/:id", getSingleBV);
// router.put("/BV/:id", pendanteBV);
// router.put("/BV/buildings/:id", updateBV);
// router.delete("/BV/:id", deleteBV);

export default router;