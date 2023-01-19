const { Router } = require("express")
const express = require("express")
const db = require("../db/dbConfig")
const songs = express.Router()
const { getAllSongs, getSong, createSong } = require("../queries/songs")
const { checkSongName, checkSongArtist } = require("../validations/checkSongs")

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
  song === true ? res.json(song) : res.status(404).json("/")
})

//CREATE
songs.post("/", checkSongName, checkSongArtist, async (req, res) => {
  try {
    const newSong = await createSong(req.body)
    res.json(songs)
  } catch (error) {
    res.status(404).json({ error: "server error" })
  }
})

module.exports = songs
