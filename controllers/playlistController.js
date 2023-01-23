const express = require("express")

const { getAllPlay, getPlay, createPlay, deletePlay, updatePlay} = require('../queries/playlist')



const plays = express.Router()


plays.get("/", async (req , res) => {
   const allPlays = await getAllPlay()
    if(allPlays[0]){
        res.status(200).json(allPlays)
    }
    else{
        res.status(500).json({error: "server error"})
    }
})


plays.get("/:id", async (req , res) => {
    const {id} = req.params
    const play = await getPlay(id);
    if(!play.message){
        res.json(play)
    }
    else{
        res.status(404).json({error: "not found"})
    }
})


plays.post("/", async (req, res) => {
    try {
      const play = await createPlay(req.body);
      res.json(play);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });


plays.delete("/:id", async (req ,res) => {
  const {id} = req.params
  const deletedPlay = await deletePlay(id)
  if(deletedPlay.id){
    res.status(200).json(deletedPlay)
  }
  else{
    res.status(404).json("Playlist not found")
  }
})





plays.put("/:id" , async (req , res) => {
  const {id} = req.params
  const updatedPlay = await updatePlay(id, req.body);
  res.status(200).json(updatedPlay);
})


module.exports = plays