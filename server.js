// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.port || 3001;

const app = express();

// Set up parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// set up a Route
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// set up a Listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
