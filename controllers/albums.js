const express = require("express")
const router = express.Router()
const { getAllAlbums } = require("../queries/albums/all.js")
const { getOneAlbum, getSongsFromAlbum } = require("../queries/albums/show.js")
const { createAlbum } = require("../queries/albums/create.js")
const { deleteAlbum } = require("../queries/albums/delete.js")
const { updateAlbum } = require("../queries/albums/update.js")
const { albumSchema } = require("../validations/albumsValidations.js")
const { validationError } = require("../validations/errorValidation.js")
// import songs controller into albums -> /album/:album_id/songs
router.use("/:albumId/songs", require("./songs.js"))


// GET ALL ALBUMS
router.get("/", async (req, resp) => {
    const albums = await getAllAlbums()

    albums.length > 0 ? resp.status(200).json(albums) : resp.status(500).json({ error: "Server Error" });
})

// SHOW ROUTE (ONE ALBUM)
router.get("/:id", async (req, resp) => {
    const {id} = req.params
    const album = await getOneAlbum(id)
    
    album.id ? resp.json(album) : resp.status(404).json({Error: "Album id not found"})
})

// SHOW ROUTE FOR SONGS ON ALBUM
router.get("/:id/songs", async (req, resp) => {
    const {id} = req.params
    const songs = await getSongsFromAlbum(id)

    songs.length > 0 ? resp.status(200).json(songs) : resp.status(404).json({Error: "Album Not Found"})
})

// CREATE ALBUM
router.post("/", albumSchema, validationError, async (req, resp) => {
    const newAlbum = await createAlbum(req.body)

    newAlbum.id ? resp.status(200).json(newAlbum) : resp.status(500).json({error : "Server Error"})
})

// DELETE ROUTE
router.delete("/:id", async (req, resp) => {
    const {id} = req.params
    const deletedAlbum = await deleteAlbum(id)

    deletedAlbum.id ? resp.status(200).json(deletedAlbum) :
    resp.status(404).json({error : "Album Not Found"})
})

// UPDATE/EDIT/PUT ROUTE
router.put("/:id", albumSchema, validationError, async (req, resp) => {
    const {id} = req.params
    const updatedAlbum = await updateAlbum(id, req.body)

    updatedAlbum.id ? resp.status(200).json(updatedAlbum) : resp.status(500).json({error: "Server Error"})
})



module.exports = router