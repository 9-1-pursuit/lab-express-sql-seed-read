const express = require("express");
const playlists = express.Router();
const {
  getAllPLaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
} = require("../queries/playlists");
//import songs to playlists
const songController = require("./songController");
playlists.use("/:playlistId/songs", songController);

//index for playlists
playlists.get("/", async (req, res) => {
  const allPlaylists = await getAllPLaylists();
  if (allPlaylists[0]) {
    res.status(200).json(allPlaylists);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

//show one playlist
playlists.get("/:id", async (req, res) => {
  const { id } = req.params;
  const playlist = await getPlaylist(id);
  if (!playlist.message) {
    res.status(200).json(playlist);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

//create a new playlist
playlists.post("/", async (req, res) => {
  try {
    const playlist = await createPlaylist(req.body);
    res.status(200).json(playlist);
  } catch (error) {
    res.status(404).json({ error: "Playlist not found" });
  }
});

//delete a playlist
playlists.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlaylist = await deletePlaylist(id);
    if (deletedPlaylist.id) {
      res.status(200).json(deletedPlaylist);
    }
  } catch (error) {
    res.status(404).json({ error: "Playlist not found" });
  }
});

//update a playlist
playlists.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPlaylist = await updatePlaylist(id, req.body);
    res.status(200).json(updatedPlaylist);
  } catch (error) {
    res.status(404).json({ error: "Playlist not found" });
  }
});

module.exports = playlists;
