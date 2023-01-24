//! Dependencies
const cors = require('cors');
const express = require('express');
const songsController = require('./controllers/songController');
const playlistController = require('./controllers/playlistController');

//! Congfig
const app = express();

//! Middleware

app.use(cors());
app.use(express.json());

//! Songs Routes
app.use('/songs', songsController);

//! playlist route
app.use('/playlist', playlistController);

//! Routes

app.get('/', (req, res) => {
  res.send('Welcome to the Songs App');
});

//! 404
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

//! Export
module.exports = app;
