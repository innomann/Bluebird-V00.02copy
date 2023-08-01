const express = require("express");
require("dotenv").config(); // for loading environment variables
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");


const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
app.set("view engine", "ejs");

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.use(passport.initialize());
require("./middleware/passport")(passport);
app.use("/api/users", users);
app.use("/api/posts/", posts);
app.get("/", posts)


app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
