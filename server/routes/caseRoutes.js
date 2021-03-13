const caseController = require("../controller/caseController");
const express = require("express");
const Router = express.Router();

Router.route("/")
  .get(caseController.getAllCases)
  .post(caseController.createCase);

Router.route("/:id")
  .get(caseController.getCase)
  .delete(caseController.deleteCase)
  .patch(caseController.updateCase);

module.exports = Router;
