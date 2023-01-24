const express = require("express");
const songs = express.Router({ mergeParams: true });
const { getAllSongs, getSong, createSong, destroySong, updateSong } = require("../queries/songs")
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

// DESTROY
songs.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const deletedSong = await destroySong(id)
        res.status(200).json(deletedSong)
    } catch (error) {
        res.status(404).json({ error: "id not found"})
    }
})

// UPDATE   
songs.put("/:id", checkName, checkArtist, checkBoolean, async (req, res) => {
    try {
        const { id } = req.params
        const updatedSong = await updateSong(id, req.body)
        res.status(200).json(updatedSong)
    } catch (error) {
        res.status(404).json({ error: "song ID not found "})
    }
})



module.exports = songs;