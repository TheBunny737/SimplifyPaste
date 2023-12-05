// routes/paste.js
const express = require('express');
const router = express.Router();
const { Paste } = require('../models/Paste..js'); // Import the Mongoose model for Paste
  // API endpoint to save text into MongoDB
  router.post('/paste', async (req, res) => {
    try {
      const { text } = req.body;
      const newPaste = new Paste({ text });
      await newPaste.save();
      res.json({ message: 'Paste saved successfully', id: newPaste._id });
    } catch (error) {
      res.status(500).json({ error: 'Unable to save the paste' });
    }
  });
  

// API endpoint to retrieve a paste by ID
router.get('/paste/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const paste = await Paste.findById(id);
      if (!paste) {
        return res.status(404).json({ error: 'Paste not found' });
      }
      res.json({ id: paste._id, text: paste.text });
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch the paste' });
    }
});
  


  module.exports = router;