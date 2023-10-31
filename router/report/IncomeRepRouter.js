import express from "express";

import { BakeryReport, BreadReport, BuildingReport, EnDeplomaReport, EnTranscriptReport, FarmaticProductsReport, GuaranteedRecursiveReport, GuestHouseReport, MAFeesReport, MAFormsReport, NationalNumReport, NocturnalFeesReport, PaperReport, ResearchFarmReport, VehicleReport, idCardReport, incomeReport } from "../../controllers/report/incomeReportContr.js";

const router = express.Router();

router.get("/income/report", incomeReport);
router.get("/income/report/id-card", idCardReport);
router.get("/income/report/nocturnal-fees", NocturnalFeesReport);
router.get("/income/report/ma-fees", MAFeesReport);
router.get("/income/report/en-deploma", EnDeplomaReport);
router.get("/income/report/en-transcript", EnTranscriptReport);
router.get("/income/report/notional-num", NationalNumReport);
router.get("/income/report/buildings", BuildingReport);
router.get("/income/report/vehicles", VehicleReport);
router.get("/income/report/bakery", BakeryReport);
router.get("/income/report/paper", PaperReport);
router.get("/income/report/bread", BreadReport);
router.get("/income/report/ma-forms", MAFormsReport);
router.get("/income/report/national-num", NationalNumReport);
router.get("/income/report/research-farms", ResearchFarmReport);
router.get("/income/report/guest-house", GuestHouseReport);
router.get("/income/report/farm-products", FarmaticProductsReport);
router.get("/income/report/guaranteed", GuaranteedRecursiveReport);


export default router;
