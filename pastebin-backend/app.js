// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./db'); // Import the database connection function
const pasteRoutes = require('./routes/paste'); // Import your routes

const app = express();
app.use(cors());
app.use(bodyParser.json());


// Set up your routes
app.use('/api', pasteRoutes); // Assuming your routes are in a separate file
app.use((req, res, next) => {
    res.status(404).send('Not Found');
  });
// API 
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports = app; // Export the Express app for testing purposes

// Initialize the database connection when needed (e.g., before starting the server)
connectDB(); // Call the connectDB function to establish the database connection
