import express from "express";

import { createNationalNum, deleteNationalNum, getNationalNums, searchNationalNum, singleNationalNum, updateNationalNum } from "../../controllers/income/NationalNumController.js";


const router = express.Router();

router.get("/NationalNum", getNationalNums);
router.get("/NationalNum/:id", singleNationalNum);
router.get("/NationalNum/:search", searchNationalNum);
router.post("/NationalNum", createNationalNum);
router.put("/NationalNum/:id", updateNationalNum);
router.delete("/NationalNum/:id", deleteNationalNum);

export default router;