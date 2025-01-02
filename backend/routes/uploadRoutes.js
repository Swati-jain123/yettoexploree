const express = require("express");
const multer = require("multer");
const Upload = require("../models/UploadModel");

const router = express.Router();

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// API Route to upload file and profile picture
router.post(
  "/upload",
  upload.fields([{ name: "file" }, { name: "profilePicture" }]),
  async (req, res) => {
    try {
      const { title, description } = req.body;

      if (!req.files || !req.files.file || !req.files.profilePicture) {
        return res.status(400).json({ message: "All files are required!" });
      }

      const newUpload = new Upload({
        title,
        description,
        fileUrl: `http://localhost:5000/uploads/${req.files.file[0].filename}`,
        profilePictureUrl: `http://localhost:5000/uploads/${req.files.profilePicture[0].filename}`,
      });

      await newUpload.save();

      res.status(201).json({
        message: "File and profile picture uploaded successfully!",
        upload: newUpload,
      });
    } catch (error) {
      res.status(500).json({ message: "Error uploading files", error });
    }
  }
);

module.exports = router;
