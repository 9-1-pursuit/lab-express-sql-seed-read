const express = require("express")
// const reviews = express.Router({ mergerParams: true })
const {
  updateAlbum,
  deleteAlbum,
  createAlbum,
  getOneAlbum,
  getAllAlbum,
} = require("../queries/ablum")

// Index (get)
album.get("/", async (req, res) => {
  const { albumId } = req.params
  try {
    const allAlbum = await getAllAlbum(albumId)
    res.status(200).json(allAlbum)
  } catch (error) {
    res.status(500).json({ error: "Server Error " })
  }
})

// SHOW (get)
album.get("/:id", async (req, res) => {
  const { id } = req.params
  const oneAlbum = await getOneAlbum(id)
  !oneAlbum.message
    ? res.status(200).json(oneAlbum)
    : res.status(404).json({ error: "review not Found" })
})

// create (post)
album.post("/", async (req, res) => {
  try {
    const createdOneAlbum = await createAlbum(req.body)
    res.status(200).json(createdOneAlbum)
  } catch (error) {
    res.status(500).json({ error: "server error" })
  }
})

// Delete
album.delete("/:id", async (req, res) => {
  try {
    const deletedOneAlbum = await deleteAlbum(id)
    res.status(200).json(deletedOneAlbum)
  } catch (error) {
    res.status(500).json({ error: "ID not Found" })
  }
})

// update Reviews
album.put("/:id", async (req, res) => {
  try {
    const updateOneAlbum = await updateAlbum(id, req.body)
    res.status(200).json(updateOneAlbum)
  } catch (error) {
    res.status(500).json({ error: " review not found" })
  }
})
module.exports = album
