const authController = require("../controller/authController");
const express = require("express");
const Router = express.Router();

Router.route("/:id").post(authController.createAccount);
