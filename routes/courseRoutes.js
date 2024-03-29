const express = require("express");
const {
  createCourse,
  deleteCourse,
} = require("../controllers/courseController");
const router = express.Router();

router.post("/createcourse", createCourse);
router.delete("/deletecourse:id", deleteCourse);

module.exports = router;
