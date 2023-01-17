const express = require("express")
const songs = express.Router()

// Index
songs.get("/", (req, res) => {
  res.json({ status: "ok" })
})

module.exports = songs
