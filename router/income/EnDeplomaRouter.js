import express from "express";

import { createEnDeploma, deleteEnDeploma, getEnDeplomas, searchEnDeploma, singleEnDeploma, updateEnDeploma } from "../../controllers/income/EnDeplomaController.js";


const router = express.Router();

router.get("/EnDeploma", getEnDeplomas);
router.get("/EnDeploma/:id", singleEnDeploma);
router.get("/EnDeploma/:search", searchEnDeploma);
router.post("/EnDeploma", createEnDeploma);
router.put("/EnDeploma/:id", updateEnDeploma);
router.delete("/EnDeploma/:id", deleteEnDeploma);

export default router;