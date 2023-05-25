import express from "express";

import { createNMDTN, deleteNMDTN, getNMDTN, searchNMDTN, singleNMDTN, updateNMDTN } from "../../controllers/income/NMDTNFeesController.js";

const router = express.Router();

router.get("/NMDTN", getNMDTN);
router.get("/NMDTN/:id", singleNMDTN);
router.get("/NMDTN/:search", searchNMDTN);
router.post("/NMDTN", createNMDTN);
router.put("/NMDTN/:id", updateNMDTN);
router.delete("/NMDTN/:id", deleteNMDTN);

export default router;