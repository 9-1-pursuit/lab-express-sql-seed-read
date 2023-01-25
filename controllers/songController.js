const express = require("express");
const songs = express.Router({ mergeParams: true });
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
  filterAndSort,
} = require("../queries/songs");
const { checkInput } = require("../validations/checkSong");

// Index
songs.get("/", async (req, res) => {
  const { playlistId } = req.params;
  try {
    const allSongs = await getAllSongs(playlistId);
    const { is_favorite, order } = req.query;
    if (allSongs[0]) {
      if (is_favorite || order) {
        const filteredSorted = await filterAndSort(is_favorite, order);
        res.status(200).json(filteredSorted);
      } else {
        res.status(200).json(allSongs);
      }
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Show
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (!song.message) {
    res.status(200).json(song);
  } else {
    // res.status(404).json({ error: song.message });
    res.status(404).redirect("/not-found");
  }
});

// Create
songs.post("/", checkInput, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Delete
songs.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    res.status(200).json(deletedSong);
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

// Update
songs.put("/:id", checkInput, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

module.exports = songs;
