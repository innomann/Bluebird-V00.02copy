const express = require("express");
const router = express.Router();
const User = require("../../models/usermodel");

const { loginUser, allUsers } = require("../../controllers/userControllers");

router.route("/allUsers").get(allUsers);
router.route("/login").post(loginUser);

module.exports = router;
