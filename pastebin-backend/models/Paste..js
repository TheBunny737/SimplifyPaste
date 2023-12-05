// models/Paste.js
const mongoose = require('mongoose');

const pasteSchema = new mongoose.Schema({
  text: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Paste = mongoose.model('Paste', pasteSchema);

module.exports = { Paste };
