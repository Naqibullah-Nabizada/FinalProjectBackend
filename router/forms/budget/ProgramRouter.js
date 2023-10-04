import express from "express";

import { createProgram, getAllPrograms, searchProgram } from './../../../controllers/forms/budget/ProgramCont.js';

const router = express.Router();


router.get("/Programs", getAllPrograms);
router.post("/Program", createProgram);
router.get("/Programs/:search", searchProgram);


export default router;