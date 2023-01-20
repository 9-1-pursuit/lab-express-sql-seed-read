// DEPENDENCIES //
const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
} = require("../queries/songs");
const {
  checkName,
  checkArtist,
  checkBoolean,
} = require("../validations/checksongs");

// ROUTES //

// INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getOneSong(id);
  try {
    if (song.id) {
      res.status(200).json(song);
    } else {
      res.status(404).json({ error: "not-found" });
    }
  } catch (error) {
    return error;
  }
});

// CREATE
songs.post("/", checkName, checkArtist, checkBoolean, async (req, res) => {
  try {
    const makeSong = await createSong(req.body);
    res.status(200).json(makeSong);
  } catch (error) {
    res.status(400).json({ error: error });
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

// EXPORT //
module.exports = songs;
