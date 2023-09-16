import express from "express";

import { createFaselDetail, getAllFaselDetail, getFaselDetail } from '../../controllers/forms/FaselDetailController.js';

const router = express.Router();

//! Fasel
router.get("/FaselDetail/", getAllFaselDetail);
router.get("/FaselDetail/:id", getFaselDetail);
router.post("/FaselDetail", createFaselDetail);
// router.get("/BV/buildings:search", searchBV);
// router.get("/BV/buildings/:id", getSingleBV);
// router.put("/BV/:id", pendanteBV);
// router.put("/BV/buildings/:id", updateBV);
// router.delete("/BV/:id", deleteBV);

export default router;