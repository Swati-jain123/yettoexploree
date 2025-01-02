const express = require('express');
const router = express.Router();
const SelectedUpload = require('../models/SelectedUploads');
const Upload = require('../models/UploadModel'); // Assuming Upload model is here
const AlternativeSelectedUpload = require('../models/AlternativeSelectedUpload');

console.log("uploadsRoutes is being used");
// POST: Submit selected uploads
router.post('/submit', async (req, res) => {
  try {
    const { selectedUploads } = req.body;

    // Ensure 8 uploads are selected
    if (selectedUploads.length !== 8) {
      return res.status(400).json({ message: 'You must select exactly 8 uploads.' });
    }

    const existingUpload = await SelectedUpload.findOne({ uploads: { $size: 8 } });

    if (existingUpload) {
      await SelectedUpload.deleteOne({ _id: existingUpload._id });
    }

    const newSelectedUpload = new SelectedUpload({ uploads: selectedUploads });
    await newSelectedUpload.save();

    res.status(201).json({ message: 'Selected uploads submitted successfully!', data: newSelectedUpload });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to submit selected uploads' });
  }
});

router.post('/submitnext', async (req, res) => {
  try {
    const { selectedUploads } = req.body;

    // Ensure exactly 8 uploads are selected
    if (selectedUploads.length !== 8) {
      return res.status(400).json({ message: 'You must select exactly 8 uploads.' });
    }

    // Check if there is an existing record with 8 uploads
    const existingUpload = await AlternativeSelectedUpload.findOne({ uploads: { $size: 8 } });

    if (existingUpload) {
      // Delete the existing record
      await AlternativeSelectedUpload.deleteOne({ _id: existingUpload._id });
    }

    // Create and save the new record
    const newAlternativeSelectedUpload = new AlternativeSelectedUpload({ uploads: selectedUploads });
    await newAlternativeSelectedUpload.save();

    res.status(201).json({
      message: 'Alternative selected uploads submitted successfully!',
      data: newAlternativeSelectedUpload,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to submit alternative selected uploads' });
  }
});


// Route to get selected uploads
router.get('/selected-uploads', async (req, res) => {
  try {
    const selectedUploads = await SelectedUpload.findOne()
      .populate('uploads'); // Populate with data from the Upload model

    if (!selectedUploads) {
      return res.status(404).json({ message: 'No selected uploads found.' });
    }

    res.json(selectedUploads.uploads); // Send the populated uploads array
  } catch (error) {
    console.error('Error fetching selected uploads:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/selected-uploadss', async (req, res) => {
  try {
    const selectedUploads = await AlternativeSelectedUpload.findOne()
      .populate('uploads'); // Populate with data from the Upload model

    if (!selectedUploads) {
      return res.status(404).json({ message: 'No selected uploads found.' });
    }

    res.json(selectedUploads.uploads); // Send the populated uploads array
  } catch (error) {
    console.error('Error fetching selected uploads:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
