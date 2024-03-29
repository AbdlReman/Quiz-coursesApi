const express = require("express");
const router = express.Router();
const {
  saveResult,
  getUserResults,
} = require("../controllers/resultController");

router.post("/saveresult", saveResult);
router.get("/userresult/:userId", getUserResults);

module.exports = router;
