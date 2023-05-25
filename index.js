import cors from "cors";
import express from "express";

import IdCardRoute from "./router/income/IdCardRouter.js";
import NMDTNRoute from "./router/income/NMDTNFeesRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.use(IdCardRoute);
app.use(NMDTNRoute);


app.listen(5000, () => console.log('server is running'));