import express from "express";

import { createNMDTN, getNMDTN, getSingleNMDTN, pendanteNMDTN, searchNMDTN, updateNMDTN } from "../../controllers/income/NMDTNFeesController.js";

const router = express.Router();

//! Nocturnal Fees
router.get("/NMDTN/nocturnalFees", getNMDTN);
router.get("/NMDTN/nocturnalFees:search", searchNMDTN);
router.get("/NMDTN/nocturnalFees/:id", getSingleNMDTN);
router.post("/NMDTN", createNMDTN);
router.put("/NMDTN/:id", pendanteNMDTN);
router.put("/updateNMDTN/:id", updateNMDTN);

//! MA Fees
router.get("/NMDTN/MAfees", getNMDTN);
router.get("/NMDTN/MAfees:search", searchNMDTN);
router.get("/NMDTN/MAFees/:id", getSingleNMDTN);
router.post("/NMDTN", createNMDTN);
router.put("/updateNMDTN/:id", updateNMDTN);
router.put("/NMDTN/:id", pendanteNMDTN);

//! English Deploma
router.get("/NMDTN/EnDeploma", getNMDTN);
router.get("/NMDTN/EnDeploma:search", searchNMDTN);
router.get("/NMDTN/EnDeploma/:id", getSingleNMDTN);
router.post("/NMDTN", createNMDTN);
router.put("/NMDTN/:id", pendanteNMDTN);
router.put("/updateNMDTN/:id", updateNMDTN);

//! English Transcript
router.get("/NMDTN/EnTranscript", getNMDTN);
router.get("/NMDTN/EnTranscript:search", searchNMDTN);
router.get("/NMDTN/EnTranscript/:id", getSingleNMDTN);
router.post("/NMDTN", createNMDTN);
router.put("/NMDTN/:id", pendanteNMDTN);
router.put("/updateNMDTN/:id", updateNMDTN);

//! National Number Talbe
router.get("/NMDTN/NationalNum", getNMDTN);
router.get("/NMDTN/NationalNum:search", searchNMDTN);
router.get("/NMDTN/NationalNum/:id", getSingleNMDTN);
router.post("/NMDTN", createNMDTN);
router.put("/NMDTN/:id", pendanteNMDTN);
router.put("/updateNMDTN/:id", updateNMDTN);

export default router;