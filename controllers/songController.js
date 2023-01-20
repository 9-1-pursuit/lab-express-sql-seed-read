const express = require("express");
const songs = express.Router();
const { checkName, checkArtist, checkBoolean } = require("../validations/checkSongs");
const {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
songs.get("/:id",  async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);

  if (!song.message) {
    res.status(200).json(song);
  } else {
    res.status(404).json({ error: "Song not found" });
  }
});

// CREATE
songs.post("/", checkName, checkArtist, checkBoolean, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

// DELETE
  songs.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong.id) {
      res.status(200).json(deletedSong);
    } else {
      res.status(404).json("Song not found");
    }
  });

// UPDATE
songs.put("/:id", checkName, checkArtist, checkBoolean, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
  } catch (error) {
    res.status(404).json({error: "Song not found"})
  }
});

module.exports = songs;
