const express = require("express");
const path = require("path");
const pug = require("pug");
const morgan = require("morgan");
const caseRouter = require("./routes/caseRoutes");
const viewRouter = require("./routes/viewRoutes");
const app = express();

//console log request
app.use(morgan("tiny"));
//access req.body
app.use(express.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(`${__dirname}/public`));


app.use("/", viewRouter);
app.use("/api/v1/case", caseRouter);

module.exports = app;
