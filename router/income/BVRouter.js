import express from "express";

import { createBV, deleteBV, getBV, getSingleBV, pendanteBV, searchBV, updateBV } from "../../controllers/income/BVController.js";

const router = express.Router();

//! Buildings
router.get("/BV/buildings", getBV);
router.get("/BV/buildings:search", searchBV);
router.get("/BV/buildings/:id", getSingleBV);
router.post("/BV", createBV);
router.put("/BV/:id", pendanteBV);
router.put("/BV/buildings/:id", updateBV);
router.delete("/BV/:id", deleteBV);

//! Vehicles
router.get("/BV/vehicles", getBV);
router.get("/BV/vehicles:search", searchBV);
router.get("/BV/vehicles/:id", getSingleBV);
router.post("/BV", createBV);
router.put("/BV/:id", pendanteBV);
router.put("/BV/vehicles/:id", updateBV);
router.delete("/BV/:id", deleteBV);

export default router;
