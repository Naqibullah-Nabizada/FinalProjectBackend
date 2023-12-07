import express from "express";


import { createIdCard, getIdCards, getSingleIdCard, pendanteIdCard, searchIdCard, updateIdCard } from "../../controllers/income/IdCardController.js";


const router = express.Router();

router.get("/IdCards", getIdCards);
router.get("/IdCards/:search", searchIdCard);
router.get("/IdCard/:id", getSingleIdCard);
router.post("/IdCards", createIdCard);
router.put("/IdCards/:id", pendanteIdCard);
router.put("/IdCard/:id", updateIdCard);

export default router;
