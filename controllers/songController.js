const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong } = require("../queries/songs.js");
const {
  checkName,
  checkArtist,
  checkFav,
} = require("../validations/checkSongs");

//index
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
  //   res.json({ status: "ok" });
});

//SHOW 1 song
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (!song.message) {
    res.status(200).json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

//POST
songs.post("/", checkName, checkArtist, checkFav, async (req, res) => {
  try {
    const newSong = await createSong(req.body);
    res.status(200).json(newSong);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

module.exports = songs;
