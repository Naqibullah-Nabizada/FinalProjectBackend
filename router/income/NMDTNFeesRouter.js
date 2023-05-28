import express from "express";

import { createNMDTN, deleteNMDTN, getNMDTN, searchNMDTN, updateNMDTN } from "../../controllers/income/NMDTNFeesController.js";

const router = express.Router();

//! Nocturnal Fees
router.get("/NMDTN/nocturnalFees", getNMDTN);
router.get("/NMDTN/nocturnalFees:search", searchNMDTN);
router.post("/NMDTN", createNMDTN);
router.put("/NMDTN/:id", updateNMDTN);
router.delete("/NMDTN/:id", deleteNMDTN);

//! MA Fees
router.get("/NMDTN/MAfees", getNMDTN);
router.get("/NMDTN/MAfees:search", searchNMDTN);
router.post("/NMDTN", createNMDTN);
router.put("/NMDTN/:id", updateNMDTN);
router.delete("/NMDTN/:id", deleteNMDTN);

//! English Deploma
router.get("/NMDTN/EnDeploma", getNMDTN);
router.get("/NMDTN/EnDeploma:search", searchNMDTN);
router.post("/NMDTN", createNMDTN);
router.put("/NMDTN/:id", updateNMDTN);
router.delete("/NMDTN/:id", deleteNMDTN);

//! English Transcript
router.get("/NMDTN/EnTranscript", getNMDTN);
router.get("/NMDTN/EnTranscript:search", searchNMDTN);
router.post("/NMDTN", createNMDTN);
router.put("/NMDTN/:id", updateNMDTN);
router.delete("/NMDTN/:id", deleteNMDTN);

//! National Number Talbe
router.get("/NMDTN/NationalNum", getNMDTN);
router.get("/NMDTN/NationalNum:search", searchNMDTN);
router.post("/NMDTN", createNMDTN);
router.put("/NMDTN/:id", updateNMDTN);
router.delete("/NMDTN/:id", deleteNMDTN);

export default router;