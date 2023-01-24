const express = require('express');
const songs = express.Router({ mergeParams: true });
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require('../queries/songs');
const {
  checkName,
  checkArtist,
  checkBoolean,
} = require('../validations/checkSongs');

// const playlists = require('./playlistController');

//! index
songs.get('/', async (req, res) => {
  const { playlistID } = req.params;
  try {
    const allSongs = await getAllSongs(playlistID);
    res.status(200).json(allSongs);
  } catch (error) {
    res.status(500).json({ error: 'Not found ' });
  }
});

//! Show

songs.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ error: 'Not found' });
  }
});

//! Create

songs.post('/', checkName, checkArtist, checkBoolean, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//! Delete

songs.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) res.status(200).json(deletedSong);
  else res.status(404).json('Song not found');
});

//! Update
songs.put('/:id', checkName, checkBoolean, checkArtist, async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  res.status(200).json(updatedSong);
});

module.exports = songs;
