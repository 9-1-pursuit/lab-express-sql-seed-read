const express = require("express")
const db = require("../db/dbConfig")
const songs = express.Router()
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updatedSong,
} = require("../queries/songs")
const {
  checkSongName,
  checkSongArtist,
  checkBoolean,
} = require("../validations/checkSongs")

// Index
// importing array of songs from database
songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs()
  if (allSongs[0]) {
    res.status(200).json(allSongs)
  } else res.status(500).json({ error: "server error" })
})

// SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params
  const song = await getSong(id)
  song === true ? res.json(song) : res.status(404).json({ error: "Not Found" })
})

//CREATE
songs.post(
  "/",
  checkSongName,
  checkSongArtist,
  checkBoolean,
  async (req, res) => {
    try {
      const newSong = await createSong(req.body)
      res.json(songs)
    } catch (error) {
      res.status(404).json({ error: "server error" })
    }
  }
)

// DELETE route
songs.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deletedSong = await deleteSong(id)
    res.status(200).res.json({ error: "error" })
  } catch (error) {}
})

// UPDATE route
songs.put(
  "/:id",
  checkBoolean,
  checkSongArtist,
  checkSongName,
  async (req, res) => {
    try {
      const { id } = req.params
      const updateSongs = await updatedSong(id, req.body)
      res.status(200).json(updateSongs)
    } catch (error) {
      res.status(500).json({ error: "error" })
    }
  }
)
module.exports = songs
