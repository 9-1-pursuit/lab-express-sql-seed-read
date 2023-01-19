const express = require('express');
const songs = express.Router();
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

songs.get('/', async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: 'Not found ' });
  }
});

//! Show

songs.get('/:id', async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (!song.message) res.status(200).json(song);
  else res.status(400).json({ error: 'Not Found' });
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
