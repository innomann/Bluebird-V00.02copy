
const express = require("express");
const Quiz = require("../models/quizModel");
const router = express.Router();

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

const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "dp5ursdd0",
  api_key: "592643511711839",
  api_secret: "k1N_go8Y5DWfANPAaMK-0cq0PEg",
});



const quizPost = (req, res) => {
  if (req.file) {
    cloudinary.v2.uploader.upload(req.file.path, function (err, result) {
      if (err) {
        req.json(err.message);
      }
      req.body.image = result.secure_url;
      // add image's public_id to image object
      req.body.imageId = result.public_id;

      const newPost = new Quiz(req.body);
      return newPost
      .save()
      .then((doc) => res.json(doc))
      .catch((err) =>console.log({ create: "Error creating new quiz post" }, err));

    });

  } else{
    const newPost = new Quiz(req.body);
    return newPost
    .save()
    .then((doc) => res.json(doc))
    .catch((err) =>console.log({ create: "Error creating new quiz post" }, err));

  }
  
};

const getQuiz = (req, res) => {
   // Quiz.find({})
   Quiz.aggregate([{ $sample: { size: 21 }}])
     .then((questions) => res.status(200).json(questions))
     .catch((err) =>
       res.status(400).json(console.log("Error fetching questons"))
     );
};

module.exports = {
  quizPost,getQuiz,
};
