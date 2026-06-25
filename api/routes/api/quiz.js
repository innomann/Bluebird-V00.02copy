const express = require("express");
const router = express.Router();
const Post = require("../../models/post");

const { quizPost, getQuiz } = require("../../controllers/quizControllers");

// Import multer like the other dependencies
const multer = require("multer");
// Set multer file storage folder
const upload = multer({ dest: "uploads/" });

router.post("/question", upload.single("image"), quizPost);
router.route("/getquestion").get(getQuiz);

module.exports = router;
