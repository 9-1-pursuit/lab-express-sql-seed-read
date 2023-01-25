// DEPENDENCIES
const cors = require("cors")
const express = require("express")
const songController = require("./controllers/songController.js")
// const playlistController = require("./controllers/playlistController")
const albumController = require("./controllers/albumController")
const artistController = require("./controllers/artistController")

// CONFIGURATION
const app = express()

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use("/songs", songController)
// app.use("/playlist", playlistController)
app.use("/artist", artistController)
app.use("/album", albumController)

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner")
})

// 404 page
app.get("/", (req, res) => {
  res.status(404).send("Page not Found")
})

module.exports = app
