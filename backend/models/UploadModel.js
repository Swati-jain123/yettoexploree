const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  fileUrl: { type: String, required: true },
  profilePictureUrl: { type: String, required: true },
  userId: { type: String, required: true }, // Firebase UID of the user
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Upload", uploadSchema);
