const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const User = require("../models/usermodel");
const asyncHandler = require("express-async-handler");


//IMAGE UPLOAD CONFIGURATION
const multer = require("multer");
const storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});

const imageFilter = function (req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error("Only image files are accepted!"), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });

const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dp5ursdd0",
  api_key: "592643511711839",
  api_secret: "k1N_go8Y5DWfANPAaMK-0cq0PEg",
});


const createPost = ((req, res) => {
  cloudinary.v2.uploader.upload(req.file.path, function (err, result) {
    if (err) {
      req.json(err.message);
    }
    req.body.image = result.secure_url;
    // add image's public_id to image object
    req.body.imageId = result.public_id;

    const newPost = new Post(req.body);
    newPost
      .save()
      .then((doc) => res.json(doc))
      .catch((err) => console.log({ create: "Error creating new post" }, err));
  });
});

module.exports = {
  createPost
};
