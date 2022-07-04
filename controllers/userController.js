const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please check your fields");
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  res.send("login route");
});

module.exports = {
  registerUser,
  loginUser,
};
