const userController = require("../controller/userController");
const express = require("express");
const Router = express.Router();

Router.route("/:id").post(userController.createAccount);
