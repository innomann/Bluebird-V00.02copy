const express = require("express");
const colors = require("colors");
require("dotenv").config(); // for loading environment variables
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = require("./db");
const path = require("path");
var cors = require("cors");
const User = require("./models/usermodel");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const chatRoutes = require("./routes/api/chatRoutes");
const messageRoutes = require("./routes/api/messageRoutes");
const quizRoute = require("./routes/api/quiz");
const app = express();

app.use(cors());

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
/*app.set("view engine", "ejs");
app.use(passport.initialize());

const __dirname$ = path.resolve();
if (process.env.NODE_ENV === "production") {
  console.log(process.env.NODE_ENV, " Got hitted");
  app.use(express.static(path.join(__dirname$, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname$, "client", "build", "index.html"));
  });
  
} else {
  // First route
  app.get("/", (req, res) => {
    res.status(200).json({
      message: "Hello from DE-Link Chat App server",
    });
    
  });
}*/

// Main routes
require("./middleware/passport")(passport);
app.use("/api/users", users);
app.use("/api/posts/", posts);
app.use("/api/chats", chatRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/quiz", quizRoute);
app.use("/api/getquiz", quizRoute);
app.get("/", posts);




// ==========================================
// SERVERLESS / ENVIRONMENT CONFIGURATION
// ==========================================

// If running locally, spin up a traditional listening server + sockets
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.SERVER_PORT || 5000;
  const server = app.listen(PORT, () => {
    console.log(
      colors.brightMagenta(
        `\nLocal Server is UP on PORT ${PORT}`,
      ),
    );
    console.log(`Visit ` + colors.underline.blue(`http://localhost:${PORT}`));
  });

  // Local Sockets Setup
  const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("Sockets are in action locally");
    socket.on("setup", (userData) => {
      socket.join(userData._id);
      socket.emit("connected");
    });
    socket.on("join chat", (room) => {
      socket.join(room);
    });
    socket.on("new message", (newMessage) => {
      var chat = newMessage.chatId;
      if (!chat.users) return;
      chat.users.forEach((user) => {
        if (user._id === newMessage.sender._id) return;
        socket.in(user._id).emit("message received", newMessage);
      });
    });
  });
}

// CRUCIAL FOR VERCEL: Export the Express App instance
module.exports = app;