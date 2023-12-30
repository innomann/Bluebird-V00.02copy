const asyncHandler = require("express-async-handler");
const generateToken = require("../token.js");
const User = require("../models/usermodel.js");


// @desc		Login existing user
// @route		/api/users/login
// @access		Public
const loginUser = asyncHandler(async (req, res) => {
      try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (userExist && (await userExist.matchPassword(password))) {
          res.status(200).json({
            user: userExist,
            message: "user successfully logged in",
            token: generateToken(userExist._id),
          });
        } else {
          res.status(400);
          throw new Error("Invalid email or password");
        }
      } catch (err) {
        console.log(err);
        res.status(500);
        throw new Error(err);
      }
});

// @desc			Get allUsers
const allUsers = asyncHandler(async (req, res) => {
  User.find({})
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(400).json(console.log("Error fetching posts")));
});

module.exports = {  loginUser, allUsers };
