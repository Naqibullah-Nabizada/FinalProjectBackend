import cors from "cors";
import express from "express";

import IdCardRoute from "./router/income/IdCardRouter.js";
import TwelvehSection from "./router/income/MAFormRouter.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.use(IdCardRoute);
app.use(TwelvehSection);


app.listen(5000, () => console.log('server is running'));