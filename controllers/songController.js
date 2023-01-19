const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong } = require("../queries/songs")
const { checkName, checkBoolean, checkArtist } = require("../validations/checkSongs.js")

// INDEX
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs()
    res.json(allSongs)
})

// SHOW
songs.get('/:id', async ( req, res) => {
    const { id } = req.params
    const song = await getSong(id)
    if (song) {
        // console.log(song)
        res.json(song)
    } else {
        res.status(404).json({
            message: 'Ohh you are lost, read the API documentation to find your way back home :)'
        })
    }
})

// CREATE 
songs.post("/", checkName, checkBoolean, checkArtist, async ( req, res ) => {
        const newSong = await createSong(req.body)
        if (newSong) {

        
        console.log('songController console.log of "req.body"',req.body)
        res.json(newSong)
} else{
    res.status(400).json({ 
        message: 'error' 
     })
}
})



module.exports = songs;