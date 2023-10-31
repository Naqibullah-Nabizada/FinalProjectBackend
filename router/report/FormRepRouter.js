import express from "express";

import { ReportForms, YearlyReportForms } from "../../controllers/report/formsReportContr.js";

const router = express.Router();

router.get("/forms/report", ReportForms);
router.get("/forms/yearly-report", YearlyReportForms);


export default router;
