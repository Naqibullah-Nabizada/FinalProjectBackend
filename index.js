import cors from "cors";
import express from "express";

import EnDeplomaRoute from "./router/income/EnDeplomaRouter.js";
import EnTranscriptRoute from "./router/income/EnTranscriptRouter.js";
import IdCardRoute from "./router/income/IdCardRouter.js";
import MAFeesRoute from "./router/income/MAFeesRouter.js";
import MAFormRoute from "./router/income/MAFormRouter.js";
import NationalNumRoute from "./router/income/NationalNumRouter.js";
import NocturnalFeesrRoute from "./router/income/NocturnalFeesRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(EnDeplomaRoute);
app.use(EnTranscriptRoute);
app.use(IdCardRoute);
app.use(MAFeesRoute);
app.use(MAFormRoute);
app.use(NationalNumRoute);
app.use(NocturnalFeesrRoute);

app.listen(5000, () => console.log('server is running'));