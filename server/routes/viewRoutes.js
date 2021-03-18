const viewController = require("../controller/viewController");
const authController = require("../controller/authController");
const express = require("express");
const router = express.Router();

router.route("/").get(authController.isLoggedIn, viewController.home);
router.route("/login").get(viewController.login);

module.exports = router;
