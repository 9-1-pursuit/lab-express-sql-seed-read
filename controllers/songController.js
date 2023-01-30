const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require('../queries/songs.js')

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// GET ONE SONG / SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params
  const song = await getSong(id)
  if (song) {
    res.json(song)
  } else {
    res.status(404).json({ error: "not found"})
  }
})

// ADD SONG
songs.post("/", async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error})
  }
})

// DELETE SONG
songs.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await deleteSong(id)
    res.status(200).json(deletedSong)
  } catch (error) {
    res.status(404).json({ error: "id not found" })
  }
})

// UPDATE SONG
songs.put("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const updatedSong = await updateSong(id, req.body)
    res.status(200).json(updatedSong)
  } catch (error) {
    res.status(404).json({ error: "song not found" })
  }
})

module.exports = songs;