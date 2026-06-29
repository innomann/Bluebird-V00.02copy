const asyncHandler = require("express-async-handler");
const User = require("../models/usermodel.js");
const validateLoginInput = require("../validation/login.js")

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

// @desc		Login existing user
// @route		/api/users/login
// @access		Public
const loginUser = asyncHandler(async (req, res) => {
      const { errors, isValid } = validateLoginInput(req.body);
      if (!isValid) {
        console.log(errors)
        return res.status(400).json(errors);
      }
      console.log(req.body)
      const { email, password } = req.body;
      User.findOne({ email }).then((user) => {
        if (!user) {
          return res.status(404).json({ email: "Email not found" });
        }

        bcrypt.compare(password, user.password).then((isMatch) => {
          if (isMatch) {
            const payload = {
              id: user.id,
              firstname: user.firstname || user.name,
              lastname: user.lastname,
              email: user.email,
              image:user.image,
            };
            jwt.sign(payload, SECRET, { expiresIn: "1d" }, (err, token) => {
              if (err) {
                console.log(err);
              }
              return res.json({
                success: true,
                token: "Bearer " + token,
              });
            });
          } else {
            return res.status(400).json({ password: "Password Incorrect" });
          }
        });
      });
});

// @desc			Get allUsers
const allUsers = asyncHandler(async (req, res) => {
  User.find({})
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json(console.log("Error fetching posts")));
});

module.exports = {  loginUser, allUsers };
