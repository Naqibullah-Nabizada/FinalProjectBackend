import express from "express";

import { createIdCard, deleteIdCard, getIdCards, searchIdCard, singleIdCard, updateIdCard } from "../../controllers/income/IdCardController.js";


const router = express.Router();

router.get("/IdCards", getIdCards);
router.get("/IdCards/:query", singleIdCard);
router.get("/IdCards/:search", searchIdCard);
router.post("/IdCards", createIdCard);
router.put("/IdCards/:id", updateIdCard);
router.delete("/IdCards/:id", deleteIdCard);

export default router;