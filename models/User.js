const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: "You must enter an email"
  },
  password: {
    type: String,
    required: "You must enter a password"
  },
  image: { //avatar
    type: String,
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  location: {
    type: Point,
    coordinates: []
  },
  bio: {
    type: String,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;