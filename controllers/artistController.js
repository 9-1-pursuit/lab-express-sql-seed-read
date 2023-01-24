const express = require('express')
const { as } = require('pg-promise')
const artists = express.Router({ mergeParams: true })
const {  getAllArtists,
    createArtist,
    getArtist,
    deleteArtist,
    updateArtist } = require('../queries/artist')

// Index
artists.get('/', async (req, res) => {
    const { songId } = req.params
    try {
        const allArtists = await getAllArtists(songId)
        res.status(200).json(allArtists)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error'})
    }
})

//Show 
artists.get('/:id', async (req, res) => {
    const { id } = req.params
    const artist = await getArtist(id)
    if (!artist.message) {
        res.status(200).json(artist)
    } else {
        res.status(500).json({ error: ' Artist Not Found'})
    }
})

//Create 
artists.post('/', async (req, res) => {
    try {
        const artist = await createArtist(req.body)
        res.status(200).json(artist)
    } catch (error) {
        res.status(500).json({ error: "Artist not created" })
    }
})

//Delete
artists.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deletedArtist = await deleteArtist(id)
        res.status(200).json(deletedArtist)
    } catch (error) {
        res.status(500).json({ error: 'ID NOT FOUND'})
    }
})

//Update
artists.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const updatedArtist = await updateArtist(id, req.body)
        res.status(200).json(updatedArtist)
    } catch (error) {
        res.status(500).json({ error: "Failed to update artist" })
    }
})

module.exports = artists