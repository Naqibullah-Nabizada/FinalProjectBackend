import express from "express";

import { createProgram, getAllPrograms } from './../../../controllers/forms/budget/ProgramCont.js';

const router = express.Router();


router.get("/Programs", getAllPrograms);
router.post("/Program", createProgram);

export default router;