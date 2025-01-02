const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  name: { type: String },
  email: { type: String, required: true },
  picture: { type: String },
  role: { type: String, default: "user" }, // Default role is "user"
});

module.exports = mongoose.model("User", userSchema);
