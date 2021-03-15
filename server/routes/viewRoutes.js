const viewController = require("../controller/viewController");
const express = require("express");
const router = express.Router();

router.route("/login").get(viewController.login);

module.exports = router;
