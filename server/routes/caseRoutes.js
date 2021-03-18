const caseController = require("../controller/caseController");
const authController = require("../controller/authController");
const express = require("express");
const Router = express.Router();

Router.route("/")
  .get(authController.protect, caseController.getAllCases)
  .post(authController.protect, caseController.createCase);

Router.route("/:id")
  .get(authController.protect, caseController.getCase)
  .delete(authController.protect, caseController.deleteCase)
  .patch(authController.protect, caseController.updateCase);

module.exports = Router;
