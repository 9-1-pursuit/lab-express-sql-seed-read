const express = require("express")

const { getAllSong, getSong , createSong, deleteSong, updateSong } = require("../queries/songs")


const songs = express.Router({mergeParams: true})



songs.get("/", async (req, res) => {
  const { playsId } = req.params;

  try {
    const allSongs = await getAllSong(playsId);
    res.json(allSongs);
  } catch (err) {
    res.json(err);
  }
});


 songs.get("/:id", async (req , res) => {
    const {id} = req.params
    const song = await getSong(id);
    if(!song.message){
        res.json(song)
    }
    else{
        res.status(404).json({error: "not found"})
    }
})


songs.post("/",  async (req, res) => {
    try {
      const song = await createSong(req.body);
      res.json(song);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });

  songs.delete("/:id", async (req ,res) => {
    const {id} = req.params
    const deletedSong = await deleteSong(id)
    if(deletedSong.id){
      res.status(200).json(deletedSong)
    }
    else{
      res.status(404).json("Song not found")
    }
  })


  songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
  });




module.exports = songs