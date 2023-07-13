import express from "express";

import { createBV, deleteBV, getBV, pendanteBV, searchBV } from "../../controllers/income/BVController.js";

const router = express.Router();

//! Nocturnal Fees
router.get("/BV/buildings", getBV);
router.get("/BV/buildings:search", searchBV);
router.post("/BV", createBV);
router.put("/BV/:id", pendanteBV);
router.delete("/BV/:id", deleteBV);

//! MA Fees
router.get("/BV/vehicles", getBV);
router.get("/BV/vehicles:search", searchBV);
router.post("/BV", createBV);
router.put("/BV/:id", pendanteBV);
router.delete("/BV/:id", deleteBV);

export default router;
