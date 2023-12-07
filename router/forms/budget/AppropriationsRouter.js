import express from "express";

import { refreshToken } from "../../../controllers/RefreshToken.js";

import { createAppropriation, getAllAppropriations, getAppropriationsYears, getSingleAppropriation, searchAppropriation, updateAppropriation } from './../../../controllers/forms/budget/AppropriationsCont.js';

const router = express.Router();

router.get("/token", refreshToken)

router.get("/Appropriations", getAllAppropriations);
router.get("/Appropriations/years", getAppropriationsYears);
router.get("/Appropriations/:search", searchAppropriation);
router.get("/Appropriation/:id", getSingleAppropriation);
router.post("/Appropriation", createAppropriation);
router.put("/Appropriation/:id", updateAppropriation);

export default router;