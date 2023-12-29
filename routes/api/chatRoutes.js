const router = require("express").Router();
const {
  accessChat,
  fetchChats,
} = require("../../controllers/chatControllers");
const auth = require("../../middleware/authMiddleware");


router.route("/").post(auth, accessChat).get(auth, fetchChats);

module.exports = router;