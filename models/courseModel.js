const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  courseContent: {
    mainIntroVideo: {
      title: {
        type: String,
        default: "Main Intro",
      },
      videoUrl: {
        type: String,
      },
    },
    introVideos: [
      {
        title: {
          type: String,
        },
        videoUrl: {
          type: String,
        },
      },
    ],
  },
});

module.exports = mongoose.model("Course", courseSchema);
