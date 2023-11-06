const express = require("express")
// pass object in express.router to merge parameters from other controllers
// const router = express.Router()
const router = express.Router({ mergeParams: true })
// import songs queries functions
const { getAllSongs } = require("../queries/songs/all.js")
const { getQueriedSongs } = require("../queries/songs/query-songs-route.js")
const { getOneSong } = require("../queries/songs/show.js")
const { createSong } = require("../queries/songs/create.js")
const { deleteSong } = require("../queries/songs/delete.js")
const { updateSong } = require("../queries/songs/update.js")
// validation
const { schemaCheck } = require("../validations/songsValidations.js")
const { validationError } = require("../validations/errorValidation.js")

// ROUTES for /songs
// ALL / QUERY ROUTE
router.get("/", async (req, resp) => {
    const query = req.query
    // add conditional for /albums/:albumId/songs to show songsfor that album
    const { albumId } = req.params

    if(Object.keys(query).length){
        const queriedSongs = await getQueriedSongs(query)
        
        !queriedSongs ? 
        resp.status(404).json({Error: "incorrect query values"}) : 
        resp.status(200).json(queriedSongs)
    }
    else{
        const songs = await getAllSongs(albumId)
    
        songs[0] ? 
        resp.status(200).json(songs) : 
        resp.status(500).json({ error: "Server Error" });
    }
})

// SHOW ROUTE (ONE SONG)
router.get("/:id", async (req, resp) => {
    const { id, albumId } = req.params

    if(!albumId){
        const song = await getOneSong(id)

        song.id ? 
        resp.json(song) : 
        resp.redirect("/*")
    }
    else {
        resp.redirect("/*")
    }
})

//  CREATE(POST) using express-validator functionality
router.post("/", schemaCheck, validationError, async (req, resp) => {
    const { albumId } = req.params
    if(!albumId){
        const newSong = await createSong(req.body)
    
        newSong.id ? 
        resp.status(200).json(newSong) : 
        resp.status(500).json({ error: "Server Error" })
    }
    else {
        resp.status(404).json({Error: "Cannot post to this URL"})
    }  
})

// DELETE ROUTE 
router.delete("/:id", async (req, resp) => {
    const { id, albumId } = req.params
    if(!albumId){
        const deletedSong = await deleteSong(id)

        deletedSong.id ? 
        resp.status(200).json(deletedSong) : 
        resp.status(404).json({ error: "Song Not Found" })
    }
    else {
        resp.status(404).json({Error: "Incorrect URL path"})
    }   
})

// UPDATE/ PUT ROUTE
router.put("/:id", schemaCheck, validationError, async (req, resp)=> {
    const { id, albumId } = req.params
    if(!albumId){
        const updatedSong = await updateSong(id, req.body)

        updatedSong.id ? 
        resp.status(200).json(updatedSong) : 
        resp.status(500).json({ error: "Server Error" })
    }
    else {
        resp.status(404).json({Error: "Incorrect URL path"})
    }
})

module.exports = router