import express from "express";

import { createFaselDetail, getAllFaselDetail, getFaselDetail, getSingleFaselDetail, paid, searchFaselDetail, updateFaselDetail } from '../../controllers/forms/FaselDetailController.js';

const router = express.Router();

//! Fasel
router.get("/FaselDetail/", getAllFaselDetail);
router.get("/FaselDetail/:search", searchFaselDetail);
router.get("/FaselDetails/:id", getSingleFaselDetail);
router.get("/FaselDetailss/:id", getFaselDetail);
router.post("/FaselDetail", createFaselDetail);
router.put("/FaselDetails/:id", paid);
router.put("/FaselDetail/:id", updateFaselDetail);

export default router;