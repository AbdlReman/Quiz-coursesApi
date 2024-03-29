const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "please enter email"],
  },
  password: {
    type: String,
    required: [true, "please enter password"],
  },
  role: {
    type: String,
    enum: ["admin", "student"],
  },
  profileImage: {
    type: String,
  },
  fullName: {
    type: String,
  },
  dateOfBirth: Date,
  phoneNumber: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
});

module.exports = mongoose.model("User", userSchema);
