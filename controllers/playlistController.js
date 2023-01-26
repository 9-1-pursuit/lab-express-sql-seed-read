const express = require("express")
const playlist = express.Router()
const {
  getAllPlaylist,
  createPlaylist,
  deletePlaylist,
  getOnePlaylist,
  updatePlaylist,
} = require("../queries/playlist")
const { checkTitle } = require("../validations/checkSongs")

const songController = require("./songController")
playlist.use("./playlistId/songs", songController)

// Index all playlist
playlist.get("/", async (req, res) => {
  const { playlistId } = req.params
  const allPlaylist = await getAllPlaylist(playlistId)
  allPlaylist[0]
    ? res.status(200).json(allPlaylist)
    : res.status(500).json({ error: "Server not working" })
})

// show one playlist
playlist.get("/:id", async (req, res) => {
  const { id } = req.params
  const getPlaylist = await getOnePlaylist(id)
  !getPlaylist.message
    ? res.status(200).json(getPlaylist)
    : res.status(500).json({ error: "Not Found" })
})

// create playlist
playlist.post("/", checkTitle, async (req, res) => {
  try {
    const createdPlaylist = await createPlaylist(req.body)
    res.status(200).json(createdPlaylist)
  } catch (error) {
    res.status(500).json({ error: "Server Error" })
  }
})

// delete playlist
playlist.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deletedPlaylist = await deletePlaylist(id)
    res.status(200).json(deletedPlaylist)
  } catch (error) {
    res.status(500).json({ error: " Not Found" })
  }
})

// update
playlist.put("/:id", checkTitle, async (req, res) => {
  try {
    const { id } = req.params
    const updatePlaylists = await updatePlaylist(id, req.body)
    res.status(200).json(updatePlaylists)
  } catch (error) {
    res.status(404).json({ error: "Server Error" })
  }
})

module.exports = playlist
