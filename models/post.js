const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
    },
    image: {
      type: String,
    },
    imageId: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    fistname: {
      type: String,
      required: false,
    },
    lastname: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", PostSchema);
