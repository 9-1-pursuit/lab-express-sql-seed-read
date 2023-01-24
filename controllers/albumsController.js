const express = require("express")
const albums = express.Router()
const { getAllAlbums, getAlbum, createAlbum, destroyAlbum } = require('../queries/albums')

// INDEX / SHOWALL
albums.get('/', async ( req, res ) => {
    const allAlbums = await getAllAlbums()
    res.status(200).json(allAlbums)
})

// SHOW SINGLE
albums.get('/:id', async ( req, res ) => {
    const { id } = req.params
    const album = await getAlbum(id)
    if (album) {
        res.status(200).json(album)
    } else {
        res.status(404).json({
            message: 'Ohh you are lost, read the API documentation to find your way back home :)'
        })
    }
})

// CREATE
albums.post("/", async ( req, res ) => {
    const newAlbum = await createAlbum(req.body)
    if (newAlbum) {
        res.status(200).json(newAlbum)
    } else {
        res.status(400).json({
            message: 'error'
        })
    }
})

// DESTROY
albums.delete("/:id", async ( req, res ) => {
    const { id } = req.params
    try {
        const deletedAlbum = await destroyAlbum(id)
        res.status(200).json(deletedAlbum)
    } catch (error) {
        res.status(404).json({ error: "id not found"})
    }
})

module.exports = albums;