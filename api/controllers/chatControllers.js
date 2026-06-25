const Chat = require("../models/chat");
const User = require("../models/usermodel");

const asyncHandler = require("express-async-handler");

// @desc		Access or initiate a chat between two persons
// @route		POST /api/chats
// @access		private
const accessChat = asyncHandler(async (req, res) => {

  const { userId } = req.body;
  console.log(userId, req.user._id);
  if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createChat = await Chat.create(chatData);
      const fullChat = await Chat.findOne({ _id: createChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).send(fullChat);
    } catch (err) {
      res.status(400);
      throw new Error(err.message);
    }
  }
});


// @desc		Get all the chats for one user
// @route		GET /api/chats
// @access		private
const fetchChats = asyncHandler(async (req, res) => {
  try {
    var allChats = await Chat.find({
      users: { $elemMatch: { $eq: req.user._id } },
    })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 });

    allChats = await User.populate(allChats, {
      path: "latestMessage.sender",
      select: "name pic email",
    });

    res.status(200).send(allChats);
  } catch (err) {
    res.status(500);
    throw new Error("Server could not work on the request");
  }
});


module.exports = {
  accessChat,
  fetchChats
};