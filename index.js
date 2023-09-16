import cors from "cors";
import express from "express";

import BVRoute from "./router/income/BVRouter.js";
import IdCardRoute from "./router/income/IdCardRouter.js";
import NMDTNRoute from "./router/income/NMDTNFeesRouter.js";
import TwelveSectionRoute from "./router/income/TwelveSectionRouter.js";

//! Forms

import FaselDetailRoutes from "./router/forms/FaselDetailRoutes.js";
import FaselRoutes from "./router/forms/FaselRoutes.js";
import ParentBobRoutes from "./router/forms/ParentBabRoutes.js";

//! Budget
import AppropriationRouter from "./router/forms/budget/AppropriationsRouter.js";
import ProgramRouter from "./router/forms/budget/ProgramRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.use(IdCardRoute);
app.use(NMDTNRoute);
app.use(BVRoute);
app.use(TwelveSectionRoute);

//! Forms
app.use(ParentBobRoutes);
app.use(FaselRoutes);
app.use(FaselDetailRoutes);

//! Budget
app.use(AppropriationRouter)
app.use(ProgramRouter)


app.listen(5000, () => console.log('server is running'));