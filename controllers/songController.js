const express = require("express");
const songs = express.Router();
const { getAllSongs } = require("../queries/songs")


songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs()
    res.json(allBookmarks)
})

module.exports = songs;