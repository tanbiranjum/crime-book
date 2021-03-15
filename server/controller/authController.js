const User = require("../model/User");
const bcrypt = require("bcrypt");

exports.createAccount = async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({
    status: "Success",
    data: user,
  });
};

exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  const correct = await User.correctPassword(password, user.password);
  if(correct) {
    res.status(200).json({
      status: "successs"
    })
  }
};
