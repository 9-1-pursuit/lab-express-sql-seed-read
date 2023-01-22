const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs.js");
const {
  checkName,
  checkArtist,
  checkBoolean,
  checkTime,
  checkAlbum,
} = require("../Validations/checkSong");
//INDEX
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

//! SHOW and CREATE
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  console.log(song);
  if (!song.message) {
    res.status(200).json(song);
  } else {
    res.status(404).json({ error: "Song not found" });
  }
});

// CREATE
songs.post(
  "/",
  checkName,
  checkArtist,
  checkBoolean,
  checkTime,
  checkAlbum,
  async (req, res) => {
    try {
      const song = await createSong(req.body);
      res.status(200).json(song);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
);

// DELETE
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSongs = await deleteSong(id);
  if (deletedSongs.id) {
    return res.status(200).json(deletedSongs);
  } else {
    res.status(404).json("Song ID not found!");
  }
});

// UPDATE
songs.put(
  "/:id",
  checkName,
  checkArtist,
  checkBoolean,
  checkTime,
  checkAlbum,
  async (req, res) => {
    try {
      const { id } = req.params;
      const updatedSong = await updateSong(id, req.body);
      res.status(200).json(updatedSong);
    } catch (error) {
      return res.status(404).json("Song Cannot be updated");
    }
  }
);
module.exports = songs;
