// this file is used to create the user model
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nickname: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, min: 18, required: true },
  postalcode: { type: Number, required: true },
  city: { type: String, required: true },
  phonenumber: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
