const express = require("express");
const morgan = require("morgan");
const caseRouter = require("./routes/caseRoutes");
const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.use("/api/v1/case", caseRouter);

module.exports = app;
