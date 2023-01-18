const express = require("express")
const songs = express.Router()
const { getAllSongs } = require("../queries/songs")

// Index
// importing array of songs from database
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs()
  if (allSongs[0]) {
    res.status(200).json(allSongs)
  } else res.status(500).json({ error: "server error" })
})

module.exports = songs
