const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package

const app = express();
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/pastebin', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

// Define a mongoose schema for your 'paste' collection
const pasteSchema = new mongoose.Schema({
  text: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Paste = mongoose.model('Paste', pasteSchema);

app.use(bodyParser.json());


// API endpoint to retrieve a paste by ID
app.get('/api/paste/:id', async (req, res) => {
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

// API endpoint to save text into MongoDB
app.post('/api/paste', async (req, res) => {
  try {
    const { text } = req.body;
    const newPaste = new Paste({ text });
    await newPaste.save();
    res.json({ message: 'Paste saved successfully', id: newPaste._id });
  } catch (error) {
    res.status(500).json({ error: 'Unable to save the paste' });
  }
});

// API 
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
