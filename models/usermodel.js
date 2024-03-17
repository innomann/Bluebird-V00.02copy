const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      max: 50,
      unique: false,
    },
    firstname: {
      type: String,
      required: false,
      max: 50,
      unique: false,
    },
    lastname: {
      type: String,
      required: false,
      max: 50,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default:
        "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650481698/vd6bg6se3kbqutrd4cn1.png",
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650481698/vd6bg6se3kbqutrd4cn1.png",
    },

    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    active: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

