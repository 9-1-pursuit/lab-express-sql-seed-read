const express = require("express");
//! MERGE PARAMS
const albums = express.Router();

//! IMPORT SONGS CONTROLLER
const songController = require("./songController");

//! USE Songs CONTROLLER
albums.use("/:albumId/songs", songController);
const {
  getAllAlbums,
  getOneAlbum,
  createAlbum,
  deleteAlbum,
  updateAlbum,
} = require("../queries/albums");

// INDEX
//! UPDATE FOR MERGE PARAMS
albums.get("/", async (req, res) => {
  const allAlbums = await getAllAlbums();
  if (allAlbums[0]) {
    res.status(200).json(allAlbums);
  } else {
    res.status(500).json({ error: "Server Not Found" });
  }
});

// GET ONE
albums.get("/:id", async (req, res) => {
  const { id } = req.params;
  const album = await getOneAlbum(id);
  if (!albums.message) {
    res.status(200).json(album);
  } else {
    res.status(400).json({ error: " Not Found" });
  }
});
// CREATE
albums.post("/", async (req, res) => {
  try {
    const album = await createAlbum(req.body);
    res.status(200).json(album);
  } catch (error) {
    return error;
  }
});

// DELETE

albums.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAlbum = await deleteAlbum(id);
    res.status(200).json(deletedAlbum);
  } catch (error) {
    return error;
  }
});

// UPDATE

albums.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAlbum = await updateAlbum(id, req.body);
  } catch (error) {
    return res.status(404).json("The album is not found");
  }
});

module.exports = albums;
