// Dependencies
const cors = require('cors');
const express = require('express');
const songsController = require('./controllers/songController.js');
const playlistController = require("./controllers/playlistController.js");

// Congfig
const app = express();

// Middleware

app.use(cors());
app.use(express.json());
app.use('/songs', songsController);
app.use("/playlists", playlistController);


// Routes

app.get('/', (req, res) => {
  res.send('Welcome to the Songs App');
});

// 404
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Export
module.exports = app;