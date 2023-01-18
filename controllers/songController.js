const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong } = require("../queries/songs")

// INDEX
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs()
    res.json(allSongs)
})

// SHOW
songs.get('/:id', async ( req, res) => {
    const { id } = req.params
    const song = await getSong(id)
    if (!song.messsage) {
        console.log(song)
        res.json(song)
    } else {
        res.status(404).json({
            message: 'Ohh you are lost, read the API documentation to find your way back home :)'
        })
    }
})



module.exports = songs;