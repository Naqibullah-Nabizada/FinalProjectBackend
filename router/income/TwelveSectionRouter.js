import express from "express";

import { createTwelveSection, deleteTwelveSection, getSingleTwelveSection, getTwelveSection, pendanteTwelveSection, searchTwelveSection, updateTwelveSection } from "../../controllers/income/TwelveSectionController.js";

const router = express.Router();

//! guestHouse
router.get("/TwelveSection/guestHouse", getTwelveSection);
router.get("/TwelveSection/guestHouse:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", pendanteTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);
router.get("/TwelveSection/guestHouse/:id", getSingleTwelveSection);
router.put("/TwelveSection/guestHouse/update/:id", updateTwelveSection);

//! formaticProducts
router.get("/TwelveSection/farmaticProducts", getTwelveSection);
router.get("/TwelveSection/farmaticProducts:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", pendanteTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);
router.get("/TwelveSection/farmaticProducts/:id", getSingleTwelveSection);
router.put("/TwelveSection/farmaticProducts/update/:id", updateTwelveSection);

//! guaranteed adn recursive
router.get("/TwelveSection/guaranteedRecursive", getTwelveSection);
router.get("/TwelveSection/guaranteedRecursive:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", pendanteTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);
router.get("/TwelveSection/guaranteedRecursive/:id", getSingleTwelveSection);
router.put("/TwelveSection/guaranteedRecursive/update/:id", updateTwelveSection);

//! agriculterFarm
router.get("/TwelveSection/agriculterFarm", getTwelveSection);
router.get("/TwelveSection/agriculterFarm:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", pendanteTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);
router.get("/TwelveSection/agriculterFarm/:id", getSingleTwelveSection);
router.put("/TwelveSection/agriculterFarm/update/:id", updateTwelveSection);

//! MAForm
router.get("/TwelveSection/MAForms", getTwelveSection);
router.get("/TwelveSection/MAForms:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", pendanteTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);
router.get("/TwelveSection/MAForms/:id", getSingleTwelveSection);
router.put("/TwelveSection/MAForms/update/:id", updateTwelveSection);

//! HostelBread
router.get("/TwelveSection/hostelBread", getTwelveSection);
router.get("/TwelveSection/hostelBread:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", pendanteTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);
router.get("/TwelveSection/hostelBread/:id", getSingleTwelveSection);
router.put("/TwelveSection/hostelBread/update/:id", updateTwelveSection);

//! Bakery
router.get("/TwelveSection/bakery", getTwelveSection);
router.get("/TwelveSection/bakery:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", pendanteTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);
router.get("/TwelveSection/bakery/:id", getSingleTwelveSection);
router.put("/TwelveSection/bakery/update/:id", updateTwelveSection);

//! Paper
router.get("/TwelveSection/paper", getTwelveSection);
router.get("/TwelveSection/paper:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", pendanteTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);
router.get("/TwelveSection/paper/:id", getSingleTwelveSection);
router.put("/TwelveSection/paper/update/:id", updateTwelveSection);

//! Animal Clinic
router.get("/TwelveSection/animalClinic", getTwelveSection);
router.get("/TwelveSection/animalClinic:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", pendanteTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);
router.get("/TwelveSection/animalClinic/:id", getSingleTwelveSection);
router.put("/TwelveSection/animalClinic/update/:id", updateTwelveSection);

//! Kabul Bank
router.get("/TwelveSection/kabulBank", getTwelveSection);
router.get("/TwelveSection/kabulBank:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", pendanteTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);
router.get("/TwelveSection/kabulBank/:id", getSingleTwelveSection);
router.put("/TwelveSection/kabulBank/update/:id", updateTwelveSection);

//! Bicycle 
router.get("/TwelveSection/bicycle", getTwelveSection);
router.get("/TwelveSection/bicycle:search", searchTwelveSection);
router.post("/TwelveSection", createTwelveSection);
router.put("/TwelveSection/:id", pendanteTwelveSection);
router.delete("/TwelveSection/:id", deleteTwelveSection);
router.get("/TwelveSection/bicycle/:id", getSingleTwelveSection);
router.put("/TwelveSection/bicycle/update/:id", updateTwelveSection);


export default router;