// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.port || 3001;

const app = express();

// Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Route/ make sure this works
app.get('./routes/routes.js', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);                                   ///public/index.html

// set up a Listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
