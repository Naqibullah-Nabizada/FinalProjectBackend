import express from "express";

import { createAppropriation, getAllAppropriations } from './../../../controllers/forms/budget/AppropriationsCont.js';

const router = express.Router();


router.get("/Appropriations", getAllAppropriations);
router.post("/Appropriation", createAppropriation);

export default router;