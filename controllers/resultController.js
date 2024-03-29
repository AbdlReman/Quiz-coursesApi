const Result = require("../models/resultModel");
const AsyncHandler = require("express-async-handler");

// @desc    Save a quiz result

const saveResult = AsyncHandler(async (req, res) => {
  const { quiz, user, score } = req.body;
  const result = await Result.create({ quiz, user, score });
  res.status(201).json(result);
});

//     Get quiz results for a user

const getUserResults = AsyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const results = await Result.find({ user: userId }).populate("quiz");
  res.json(results);
});

module.exports = {
  saveResult,
  getUserResults,
};
