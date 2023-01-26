const express = require ('express');
const songs = express.Router();
const {getAllSongs, getSong, createSongs, deleteSong, updateSong} = require('../queries/songs');
const { checkName, checkBoolean} = require('../validations/checkSongs');

// IMPORTING ALBUMS CONTROLLER
const albumsController = require('./albumsController')

songs.use('/:songsId/albums', albumsController)

//INDEX 
songs.get("/", async(req, res) =>{
   const allSongs = await getAllSongs()
   if (allSongs[0]){
    res.status(200).json(allSongs)
   } else{
    res.status(500).json({error:'server error'})
   }
});

// SHOW
songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    console.log("song", song)
    if (!song.message) {
      res.json(song);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });


// Create 

songs.post("/", checkName, checkBoolean, async (req,res)=>{
    try {
        const song = await createSongs(req.body)
        res.json(song)
    } catch (error) {
        res.status(400).json({ error: error })
    }
});

// DELETE
songs.delete("/:id", async (req,res)=>{
    try {
        const {id}= req.params
        const deletedSong = await deleteSong(id)
        res.status(200).json(deletedSong)
    } catch (error) {
        res.status(400).json({error:"id not found"})
    }
} );

//UPDATE
songs.put("/:id", checkName, checkBoolean, async(req,res)=>{
    try {
        const {id}= req.params
        const updatedSong = await updateSong(id, req.body)
        res.status(200).json(updatedSong)
    } catch (error) {
        res.status(400).json({error:"song not found"})
    }
})

module.exports = songs;