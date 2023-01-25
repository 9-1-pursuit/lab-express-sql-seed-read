const express = require("express");
const playlist = express.Router();
const {
  getAllPlaylist,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
} = require("../queries/playlist");

//
const songController = require("./songController.js");
playlist.use("/:playlist_id/songs", songController);

// INDEX
playlist.get("/", async (req, res) => {
  const allPlaylist = await getAllPlaylist();
  if (allPlaylist[0]) {
    res.status(200).json(allPlaylist);
  } else {
    res.status(500).json({ error: "Server not working" });
  }
});

// SHOW
playlist.get("/:id", async (req, res) => {
  const { id } = req.params;
  const playlist = await getPlaylist(id);
  if (!playlist.message) {
    res.status(200).json(playlist);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// CREATE
playlist.post("/", async (req, res) => {
  try {
    const playlist = await createPlaylist(req.body);
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE
playlist.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlaylist = await deletePlaylist(id);
    res.status(200).json(deletedPlaylist);
  } catch (error) {
    res.status(404).json({ error: "Id not found" });
  }
});

// UPDATE
playlist.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPlaylist = await updatePlaylist(id, req.body);
    res.status(200).json(updatedPlaylist);
  } catch (error) {
    res.status(404).json({ error: "playlist not found!" });
  }
});

module.exports = playlist;
