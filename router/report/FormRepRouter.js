import express from "express";

import { ReportForms, YearlyReportForms, searchFormReport } from "../../controllers/report/formsReportContr.js";

const router = express.Router();

router.get("/forms/report", ReportForms);
router.get("/forms/yearly-report", YearlyReportForms);
router.get("/forms/yearly-report/:search", searchFormReport);


export default router;
