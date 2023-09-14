const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goals = {
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  editor: {
    type: String,
    require: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
};

const GoalsSchema = new Schema(goals);
module.exports = mongoose.model("Goals", GoalsSchema);