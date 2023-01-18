const express = require("express")
const router = express.Router()
// import songs queries functions
const { getAllSongs, getOneSong, } = require("../queries/songs.js")

// Gat All Data
router.get("/", async (req, resp) => {
    const songs = await getAllSongs()
    
    songs[0] ? resp.status(200).json(songs) : resp.status(500).json({ error: "server error" });
})

// Show Data
router.get("/:id", async (req, resp) => {
    const {id} = req.params
    const song = await getOneSong(id)

    song.id ? resp.json(song) : resp.redirect("/*")
})




module.exports = router