const express = require("express");
const router = express.Router();
const {
  createQuiz,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/quizController");

router.post("/create", createQuiz);
router.put("/update:id", updateQuiz);
router.delete("/delete:id", deleteQuiz);

module.exports = router;
