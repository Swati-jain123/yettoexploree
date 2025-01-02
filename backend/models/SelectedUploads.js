// models/SelectedUploads.js

const mongoose = require('mongoose');

const selectedUploadSchema = new mongoose.Schema({
  uploads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Upload', // Assuming 'Upload' is your existing upload model
    },
  ],
}, { timestamps: true });

const SelectedUpload = mongoose.model('SelectedUpload', selectedUploadSchema);

module.exports = SelectedUpload;
