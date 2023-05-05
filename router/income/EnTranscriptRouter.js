import express from "express";

import { createEnTranscript, deleteEnTranscript, getEnTranscripts, searchEnTranscript, singleEnTranscript, updateEnTranscript } from "../../controllers/income/EnTranscriptController.js";


const router = express.Router();

router.get("/EnTranscript", getEnTranscripts);
router.get("/EnTranscript/:id", singleEnTranscript);
router.get("/EnTranscript/:search", searchEnTranscript);
router.post("/EnTranscript", createEnTranscript);
router.put("/EnTranscript/:id", updateEnTranscript);
router.delete("/EnTranscript/:id", deleteEnTranscript);

export default router;