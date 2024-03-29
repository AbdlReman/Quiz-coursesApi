const User = require("../models/userModel");
const AsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = AsyncHandler(async (req, res) => {
  const {
    email,
    password,
    role,
    profileImage,
    fullName,
    dateOfBirth,
    phoneNumber,
    gender,
  } = req.body;
  // check if user already exists
  const checkUser = await User.findOne({ email });
  if (checkUser) {
    res.status(400);
    throw new Error("User already exists!");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const createdUser = await User.create({
      email,
      password: hashedPassword,
      role,
      profileImage,
      fullName,
      dateOfBirth,
      phoneNumber,
      gender,
    });

    res.json({ email, role, token: generateToken(createdUser._id) });
  }
});

const loginUser = AsyncHandler(async (req, res) => {
  // get the data from the user
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter the fields");
  }
  const findUser = await User.findOne({ email });
  if (!findUser) {
    res.status(404);
    throw new Error("User not found");
  }
  if (findUser && (await bcrypt.compare(password, findUser.password))) {
    res.status(200);
    res.send({
      _id: findUser._id,
      email: findUser.email,
      role: findUser.role,
      profileImage: findUser.profileImage,
      fullName: findUser.fullName,
      dateOfBirth: findUser.dateOfBirth,
      phoneNumber: findUser.phoneNumber,
      gender: findUser.gender,
      token: generateToken(findUser._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  registerUser,
  loginUser,
};
