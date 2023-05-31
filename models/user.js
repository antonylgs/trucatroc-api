// this file is used to create the user model
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

userSchema.pre("save", async function (next) {
  const user = this;

  // Check if the password has been modified (or is new)
  if (!user.isModified("password")) {
    return next();
  }

  try {
    // Generate a salt (random data for the hash)
    const salt = await bcrypt.genSalt(10);

    // Hash the password with salt
    const hash = await bcrypt.hash(user.password, salt);

    // Replace password string with hash
    user.password = hash;
    next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
