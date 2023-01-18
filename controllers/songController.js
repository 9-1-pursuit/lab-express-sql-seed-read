const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong } = require("../queries/songs");

// Index
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }

  // res.status(200).json({ status: "ok" });
});

// Show
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (!song.message) {
    res.status(200).json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

module.exports = songs;
