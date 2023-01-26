const express = require("express");
const playlists = express.Router({ mergeParams: true });
const {
  getAllPlaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
} = require("../queries/playlists");

// INDEX
playlists.get("/", async (req, res) => {
  try {
    const allPlaylists = await getAllPlaylists();
    res.status(200).json(allPlaylists);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// SHOW
playlists.get("/:id", async (req, res) => {
  const { id } = req.params;
  const playlist = await getPlaylist(id);
  if (playlist) {
    res.status(200).json(playlist);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// CREATE
playlists.post("/", async (req, res) => {
  try {
    const playlist = await createPlaylist(req.body);
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE
playlists.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlaylist = await deletePlaylist(id);
    res.status(200).json(deletedPlaylist);
  } catch (error) {
    res.status(404).json({ error: "Id not found" });
  }
});

// UPDATE
playlists.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPlaylist = await updatePlaylist(id, req.body);
    res.status(200).json(updatedPlaylist);
  } catch (error) {
    res.status(404).json({ error: "playlist not found!" });
  }
});

module.exports = playlists;
