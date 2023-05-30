import express from "express";

import { createTwelveSection, deleteTwelveSection, getTwelveSection, singleTwelveSection, updateTwelveSection } from "../../controllers/income/TwelveSectionController.js";

const router = express.Router();

//! guestHouse
router.get("/TwelveSection/guestHouse", getTwelveSection);
router.get("/TwelveSection/guestHouse/:id", singleTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! formaticProducts
router.get("/TwelveSection/formaticProducts", getTwelveSection);
router.get("/TwelveSection/formaticProducts/:id", singleTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! guaranteed adn recursive
router.get("/TwelveSection/guaranteedRecursive", getTwelveSection);
router.get("/TwelveSection/guaranteedRecursive/:id", singleTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! agriculterFarm
router.get("/TwelveSection/agriculterFarm", getTwelveSection);
router.get("/TwelveSection/agriculterFarm/:id", singleTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! MAForm
router.get("/TwelveSection/MAForm", getTwelveSection);
router.get("/TwelveSection/MAForm/:id", singleTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! nocturnalForm
router.get("/TwelveSection/nocturnalForm", getTwelveSection);
router.get("/TwelveSection/nocturnalForm/:id", singleTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! HostelBread
router.get("/TwelveSection/HostelBread", getTwelveSection);
router.get("/TwelveSection/HostelBread/:id", singleTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! Bakery
router.get("/TwelveSection/Bakery", getTwelveSection);
router.get("/TwelveSection/Bakery/:id", singleTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! Paper
router.get("/TwelveSection/paper", getTwelveSection);
router.get("/TwelveSection/paper/:id", singleTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);



export default router;