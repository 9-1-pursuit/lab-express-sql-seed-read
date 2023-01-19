const express = require("express")
const router = express.Router()
// import songs queries functions
const { getAllSongs } = require("../queries/songs/all.js")
const { getQueriedSongs } = require("../queries/songs/query-songs-route.js")
const { getOneSong } = require("../queries/songs/show.js")
const { createSong } = require("../queries/songs/create.js")
const { deleteSong } = require("../queries/songs/delete.js")
const { updateSong } = require("../queries/songs/update.js")
// validation
const { validationError, schemaCheck } = require("../validations/schema-check.js")

// ROUTES for /songs

// ALL / QUERY ROUTE
router.get("/", async (req, resp) => {
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

// SHOW ROUTE (ONE SONG)
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