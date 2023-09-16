import express from "express";

import { createParentBab, getParentBab } from "../../controllers/forms/ParentBabController.js";

const router = express.Router();


router.get("/ParentBab", getParentBab);
router.post("/ParentBab", createParentBab);

export default router;