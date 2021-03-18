const Case = require("../model/Record");
const User = require("../model/User");

exports.login = (req, res, next) => {
  res.status(200).render("login", {
    title: "Login here",
  });
};

exports.home = (req, res, next) => {
  res.status(200).render("home", {});
};
