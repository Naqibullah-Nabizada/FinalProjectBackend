import express from "express";

import { createMAForm, deleteMAForm, getMAForms, singleMAForm, updateMAForm } from "../../controllers/income/MAFormController.js";


const router = express.Router();

router.get("/MAForms", getMAForms);
router.get("/MAForms/:id", singleMAForm);
router.post("/MAForms", createMAForm);
router.put("/MAForms/:id", updateMAForm);
router.delete("/MAForms/:id", deleteMAForm);

export default router;