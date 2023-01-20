const express = require("express")
const router = express.Router()

const { getAllAlbums } = require("../queries/albums/all.js")
const { getOneAlbum, getSongsFromAlbum } = require("../queries/albums/show.js")

// GET ALL ALBUMS
router.get("/", async (req, resp) => {
    const albums = await getAllAlbums()

    albums.length > 0 ? resp.status(200).json(albums) : resp.status(500).json({ error: "Server Error" });
})

// SHOW ROUTE (ONE ALBUM)
router.get("/:id", async (req, resp) => {
    const {id} = req.params
    const album = await getOneAlbum(id)
    
    album.album_id ? resp.json(album) : resp.status(404).json({Error: "Album id not found"})
})

// SHOW ROUTE FOR SONGS ON ALBUM
router.get("/:id/songs", async (req, resp) => {
    const {id} = req.params
    const songs = await getSongsFromAlbum(id)

    songs.length > 0 ? resp.status(200).json(songs) : resp.status(404).json({Error: "Album Not Found"})
})

module.exports = router