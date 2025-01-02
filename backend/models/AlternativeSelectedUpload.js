const mongoose = require('mongoose');

const alternativeSelectedUploadSchema = new mongoose.Schema({
  uploads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Upload', // Reference the existing upload model
    },
  ],
}, { timestamps: true });

const AlternativeSelectedUpload = mongoose.model('AlternativeSelectedUpload', alternativeSelectedUploadSchema);

module.exports = AlternativeSelectedUpload;
