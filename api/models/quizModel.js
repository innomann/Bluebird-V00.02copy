
const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
    },
    question: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    imageId: {
      type: String,
      required: false,
    },
    options: [],
    answer: {
      type: String,
      required: true,
    },
    explenation:{
      type: String,
      required:false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", QuizSchema);