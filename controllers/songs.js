const express = require("express")
const router = express.Router()
// import songs queries functions
const { getAllSongs } = require("../queries/songs.js")

router.get("/", async (req, resp) => {
    const songs = await getAllSongs()
    
    songs[0] ? resp.status(200).json(songs) : resp.status(500).json({ error: "server error" });
})


module.exports = router