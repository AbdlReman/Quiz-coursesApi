const Quiz = require("../models/quizModel");
const AsyncHandler = require("express-async-handler");

//   Create a quiz

const createQuiz = AsyncHandler(async (req, res) => {
  const quiz = await Quiz.create(req.body);
  res.status(201).json(quiz);
});

//     Update a quiz

const updateQuiz = AsyncHandler(async (req, res) => {
  const { question, option1, option2, option3, option4, answer } = req.body;
  const quiz = await Quiz.findById(req.params.id);

  if (quiz) {
    quiz.question = question;
    quiz.option1 = option1;
    quiz.option2 = option2;
    quiz.option3 = option3;
    quiz.option4 = option4;
    quiz.answer = answer;

    const updatedQuiz = await quiz.save();
    res.json(updatedQuiz);
  } else {
    res.status(404);
    throw new Error("Quiz not found");
  }
});

//     Delete a quiz

const deleteQuiz = AsyncHandler(async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  if (quiz) {
    await quiz.remove();
    res.json({ message: "Quiz removed" });
  } else {
    res.status(404);
    throw new Error("Quiz not found");
  }
});

module.exports = {
  createQuiz,
  updateQuiz,
  deleteQuiz,
};
