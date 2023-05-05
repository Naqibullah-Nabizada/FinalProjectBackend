import express from "express";

import { createNocturnalFees, deleteNocturnalFees, getNocturnalFeess, searchNocturnalFees, singleNocturnalFees, updateNocturnalFees } from "../../controllers/income/NocturnalFeesController.js";


const router = express.Router();

router.get("/NocturnalFees", getNocturnalFeess);
router.get("/NocturnalFees/:id", singleNocturnalFees);
router.get("/NocturnalFees/:search", searchNocturnalFees);
router.post("/NocturnalFees", createNocturnalFees);
router.put("/NocturnalFees/:id", updateNocturnalFees);
router.delete("/NocturnalFees/:id", deleteNocturnalFees);

export default router;