const express = require("express");
const colors = require("colors");
require("dotenv").config(); // for loading environment variables
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = require("./db")
const path = require("path");
const cors = require("cors")

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const app = express();

app.use(cors());
const SERVER_PORT = process.env.PORT || 5000;

dbConnect()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
app.set("view engine", "ejs");

app.use(passport.initialize());
require("./middleware/passport")(passport);
app.use("/api/users", users);
app.use("/api/posts/", posts);
app.get("/", posts)

const server = app.listen(process.env.SERVER_PORT, () => {
  console.log(
    colors.brightMagenta(
      `\nServer is UP on PORT ${process.env.SERVER_PORT || 5000}`
    )
  );
  console.log(`Visit  ` + colors.underline.blue(`localhost:${5000}`));
});
