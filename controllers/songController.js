const express = require("express");
const songs = express.Router({ mergeParams: true });
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
  checkFav,
} = require("../validations/checkSongs");

//index
songs.get("/", async (req, res) => {
  const { playlistId } = req.params;
  const { order } = req.query;

  const allSongs = await getAllSongs(playlistId);
  if (allSongs[0]) {
    if (order === "asc") {
      const ascO = allSongs.sort((a, b) => {
        if (a.name.charAt(0) < b.name.charAt(0)) {
          return -1;
        }
        if (a.name.charAt(0) > b.name.charAt(0)) {
          return 1;
        }
        return 0;
      });
      return res.status(200).json(ascO);
    } else if (order === "desc") {
      const descO = allSongs.sort((a, b) => {
        if (a.name.charAt(0) > b.name.charAt(0)) {
          return -1;
        }
        if (a.name.charAt(0) < b.name.charAt(0)) {
          return 1;
        }
        return 0;
      });
      res.status(200).json(descO);
    } else {
      res.status(200).json(allSongs);
    }
  } else {
    res.status(500).json({ error: "Server Error" });
  }
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

//delete song
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  // const song = songs.findById(id);
  // if (song) {
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    console.log(deletedSong.name);
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ error: "song not found" });
  }
});

//update song
songs.put("/:id", checkName, checkArtist, checkFav, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
  } catch (error) {
    res.status(400).json({ error: "cannot fulfil update request" });
  }
});

module.exports = songs;
