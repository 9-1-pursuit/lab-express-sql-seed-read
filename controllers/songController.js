const express = require("express");
const songs = express.Router();
const {
  checkName,
  checkArtist,
  checkBoolean,
} = require("../validations/checkSongs");
const {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
  updateSong,
  orderSongs,
  reverseSongs,
  isFavorite,
  isNotFavorite
} = require("../queries/songs");

// INDEX
songs.get("/", async (req, res) => {
  // Defining req queries
  const { order, is_favorite } = req.query;
  // Ordering by name
  if (order === "asc") {
    const orderedSongs = await orderSongs();
    if (orderedSongs) {
      res.status(200).json(orderedSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
  } 
  
  if (order === "desc") {
    const reverseOrder = await reverseSongs();
    if (reverseOrder) {
      res.status(200).json(reverseOrder);
    } else {
      res.status(500).json({ error: "server error" });
    }
  } 
  // Selecting based on is_Favorite
  if (is_favorite === "true"){
    const favorites = isFavorite()
    if(favorites){
      res.status(200).json(favorites);
    } else {
      res.status(500).json({ error: "server error" });
    }
  }

  if (is_favorite === "false"){
    const notFavorites = isNotFavorite()
    if(notFavorites){
      res.status(200).json(notFavorites);
    } else {
      res.status(500).json({ error: "server error" });
    }
  } else {
    const allSongs = await getAllSongs();
    if (allSongs) {
      res.status(200).json(allSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
  }
});

// SHOW
songs.get("/:id", async (req, res) => {
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
    res.status(404).json({ error: "Song not found" });
  }
});

module.exports = songs;
