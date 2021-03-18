const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const pug = require("pug");
const morgan = require("morgan");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const AppError = require("./utils/appError");
const caseRouter = require("./routes/caseRoutes");
const viewRouter = require("./routes/viewRoutes");
const authRouter = require("./routes/authRoutes");

dotenv.config({ path: "./config.env" });

const app = express();

//console log request
app.use(morgan("tiny"));
//access req.body
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.static(`${__dirname}/public`));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(`${__dirname}/public`));

app.use("/", viewRouter);
app.use("/api/v1/user", authRouter);
app.use("/api/v1/case", caseRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
