import express from "express";

import { createParentBab, getParentBab, searchParentBab } from "../../controllers/forms/ParentBabController.js";

const router = express.Router();


router.get("/ParentBab", getParentBab);
router.post("/ParentBab", createParentBab);
router.get("/ParentBab/:search", searchParentBab);

export default router;