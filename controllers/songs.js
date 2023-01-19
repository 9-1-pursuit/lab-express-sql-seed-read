const express = require("express")
const router = express.Router()
// import songs queries functions
const { 
    getAllSongs, 
    getOneSong, 
    deleteSong, 
     } = require("../queries/songs.js")
const { getQueriedSongs } = require("../queries/query-songs-route.js")
const { createSong } = require("../queries/create.js")
const { updateSong } = require("../queries/update.js")
// validation
const { 
    validationError, 
    schemaCheck } = require("../validations/schema-check.js")

// Get All Data (added query bonus)
router.get("/", async (req, resp) => {
    // add query bonuses
    const query = req.query

    if(Object.keys(query).length){
        const queriedSongs = await getQueriedSongs(query)
        
        !queriedSongs ? resp.status(404).json({Error: "incorrect query values"}) : resp.status(200).json(queriedSongs)
    }
    else{
        const songs = await getAllSongs()
        
        songs[0] ? resp.status(200).json(songs) : resp.status(500).json({ error: "Server Error" });
    }
})

// Show Data
router.get("/:id", async (req, resp) => {
    const {id} = req.params
    const song = await getOneSong(id)

    song.id ? resp.json(song) : resp.redirect("/*")
})

/* 
    - CREATE(POST) using express-validator functionality
    - pass req.body as obj for argument in createSong function 
*/
router.post("/", schemaCheck, validationError, async (req, resp) => {
    const newSong = await createSong(req.body)
    
    newSong.id ? resp.status(200).json(newSong) : resp.status(500).json({ error: "Server Error" })
})

// DELETE ROUTE 
router.delete("/:id", async (req, resp) => {
    const {id} = req.params
    const deletedSong = await deleteSong(id)

    deletedSong.id ? resp.status(200).json(deletedSong) : resp.status(404).json({ error: "Song Not Found" })
})

// UPDATE/ EDIT/ PUT ROUTE
router.put("/:id", schemaCheck, validationError, async (req, resp)=> {
    const {id} = req.params
    const updatedSong = await updateSong(id, req.body)

    updatedSong.id ? resp.status(200).json(updatedSong) : resp.status(500).json({ error: "Server Error" })
})




module.exports = router