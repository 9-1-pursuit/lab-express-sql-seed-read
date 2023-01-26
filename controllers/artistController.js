const express = require("express")
const artist = express.Router()
const {
  updateArtist,
  deleteArtist,
  createArtist,
  getOneArtist,
} = require("../queries/artist")
const { checkArtist, checkAlbum } = require("../validations/checkSongs")

const songController = require("./songController")
artist.use("./artistId/songs", songController)

// Index (get)
artist.get("/", async (req, res) => {
  const { artistId } = req.params
  try {
    const allArtist = await getAllArtist(artistId)
    res.status(200).json(allArtist)
  } catch (error) {
    res.status(500).json({ error: "Server Error " })
  }
})

// SHOW (get)
artist.get("/:id", async (req, res) => {
  const { id } = req.params
  const showArtist = await getOneArtist(id)
  !showArtist.message
    ? res.status(200).json(showArtist)
    : res.status(404).json({ error: "review not Found" })
})

// create (post)
artist.post("/", checkArtist, checkAlbum, async (req, res) => {
  try {
    const OneArtist = await createArtist(req.body)
    res.status(200).json(OneArtist)
  } catch (error) {
    res.status(500).json({ error: "server error" })
  }
})

// Delete
artist.delete("/:id", async (req, res) => {
  try {
    const deletedOneArtist = await deleteArtist(id)
    res.status(200).json(deletedOneArtist)
  } catch (error) {
    res.status(500).json({ error: "ID not Found" })
  }
})

// update Reviews
artist.put("/:id", checkAlbum, checkArtist, async (req, res) => {
  try {
    const updateOneArtist = await updateArtist(id, req.body)
    res.status(200).json(updateOneArtist)
  } catch (error) {
    res.status(500).json({ error: " review not found" })
  }
})
module.exports = artist
