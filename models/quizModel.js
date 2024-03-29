const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
  },
  option4: {
    type: String,
  },
  answer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Quiz", quizSchema);
