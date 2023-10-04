import express from "express";

import { createAppropriation, getAllAppropriations, getSingleAppropriation, searchAppropriation, updateAppropriation } from './../../../controllers/forms/budget/AppropriationsCont.js';

const router = express.Router();


router.get("/Appropriations", getAllAppropriations);
router.get("/Appropriations/:search", searchAppropriation);
router.get("/Appropriation/:id", getSingleAppropriation);
router.post("/Appropriation", createAppropriation);
router.put("/Appropriation/:id", updateAppropriation);

export default router;