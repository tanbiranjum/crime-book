const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const schema = new Schema({
  name: String,
  contact: Number,
  picture: String,
  presentAddress: String,
  parmanentAddress: String,
  password: String,
  passwordConfirm: String,
});

schema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});


schema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = new mongoose.model("User", schema);
module.exports = User;

/*
name, contact, NID, present address, complain Date, complain number, permanent address, fb link numeric, crime category, story, picture(multiple) , suspect name suspect nid, suspect fb link,  contact, address, deed,
complain accepetd by, bp no (num), count,
complain aganist suspect count.
*/
