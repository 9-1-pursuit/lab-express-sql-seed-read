const express = require("express");
const songs = express.Router();

const {
  checkName,
  checkArtist,
  checkBoolean,
} = require("../validations/checkSongs.js");
const {
  getAllSongs,
  getOneSong,
  createNewSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

const reviewsController = require("./reviewsController.js");

songs.use("/:songId/reviews", reviewsController);

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
  if (song) {
    res.status(200).json(song);
  } else {
    res.status(404).json({ error: "Song not found" });
  }
});

// CREATE
songs.post("/", checkName, checkArtist, checkBoolean, async (req, res) => {
  try {
    const song = await createNewSong(req.body);
    res.status(200).json(song);
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

// DELETE
songs.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    res.status(200).json(deletedSong);
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

//UPDATE
songs.put("/:id", checkName, checkArtist, checkBoolean, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

module.exports = songs;
