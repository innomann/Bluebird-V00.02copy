const Message = require("../models/message");
const User = require("../models/usermodel");
const asyncHandler = require("express-async-handler");
const Chat = require("../models/chat");

// @desc		Send message
// @route		POST /messages
// @access		Private
const sendMessage = asyncHandler(async (req, res) => {
  //console.log("Sender",  req.user._id );

  const { content, chatId, sender } = req.body;
  console.log({ content, chatId, sender });
  // check for error
  if (!content || !chatId) {
    return res.status(400).json({
      error: "Bad request",
      message: "Server could not process Invalid request",
    });
  }
  // message object
  var newMessage = {
    sender: req.body.sender,
    content: content,
    chatId: chatId,
  };
  // query DB
  try {
    var message = await Message.create(newMessage);
    console.log("IT WORKING HERE")
    message = await message.populate("sender", "name image");
    message = await message.populate("chatId");
    message = await User.populate(message, {
      path: "chatId.users",
      select: "name image email",
    });
    await Chat.findByIdAndUpdate(chatId, {
      latestMessage: message,
    });
    res.json(message);
    console.log("This the sms", message);
  } catch (err) {
    console.log(err);
    res.status(400);
    throw new Error("Server could not process request");
  }
});

// @desc		Fetch all the messages
// @route		GET /message:chatId
// @access		Private
const fetchMessage = asyncHandler(async (req, res) => {
  const { chatId } = req.params;
  try {
    const allMessages = await Message.find({ chatId })
      .populate("sender", "name image email")
      .populate("chatId");
    res.json(allMessages);
  } catch (err) {
    res.status(400);
    throw new Error("Server could not process request");
  }
});

module.exports = { sendMessage, fetchMessage };
