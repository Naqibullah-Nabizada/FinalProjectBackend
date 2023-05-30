import express from "express";

import { createTwelveSection, deleteTwelveSection, getTwelveSection, searchTwelveSection, updateTwelveSection } from "../../controllers/income/TwelveSectionController.js";

const router = express.Router();

//! guestHouse
router.get("/TwelveSection/guestHouse", getTwelveSection);
router.get("/TwelveSection/guestHouse:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! formaticProducts
router.get("/TwelveSection/farmaticProducts", getTwelveSection);
router.get("/TwelveSection/farmaticProducts:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! guaranteed adn recursive
router.get("/TwelveSection/guaranteedRecursive", getTwelveSection);
router.get("/TwelveSection/guaranteedRecursive:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! agriculterFarm
router.get("/TwelveSection/agriculterFarm", getTwelveSection);
router.get("/TwelveSection/agriculterFarm:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! MAForm
router.get("/TwelveSection/MAForms", getTwelveSection);
router.get("/TwelveSection/MAForms:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! HostelBread
router.get("/TwelveSection/hostelBread", getTwelveSection);
router.get("/TwelveSection/hostelBread:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! Bakery
router.get("/TwelveSection/bakery", getTwelveSection);
router.get("/TwelveSection/bakery:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);

//! Paper
router.get("/TwelveSection/paper", getTwelveSection);
router.get("/TwelveSection/paper:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", updateTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);



export default router;