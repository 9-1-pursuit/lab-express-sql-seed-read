const express = require("express")
const router = express.Router()
// import songs queries functions
const { getAllSongs, getOneSong, createSong, } = require("../queries/songs.js")

// Get All Data
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

// Create (POST) data
// pass req.body as obj for argument in createSong function
router.post("/", async (req, resp) => {
    const newSong = await createSong(req.body)
    newSong.id ? resp.status(200).json(newSong) :  resp.status(400).json({ error: error })
})




module.exports = router