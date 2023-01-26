const express = require('express')
const albums = express.Router({ mergeParams: true });
const {getAllAlbums, getOneAlbum, createAlbum, deleteAlbum, updateAlbum}= require('../queries/albums')

//INDEX
albums.get('/', async (req, res)=>{
    const {songsId}= req.params
try {
    const allAlbums = await getAllAlbums(songsId)
    res.status(200).json(allAlbums)
} catch (error) {
    res.status(500).json({error: 'Internal Server Error'})
}   } );


//SHOW
albums.get('/:id', async (req, res)=>{
    const { id } = req.params
    const album = await getOneAlbum(id)
    if(!album.message){
        res.status(200).json(album)
    }else {
        res.status(400).json({error: "Not found"})
    }
})

//CREATE 
albums.post('/', async (req, res)=>{
    try {
        const album = await createAlbum(req.body)
        res.status(200).json(album)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//DELETE 

albums.delete('/:id', async(req,res)=>{
    try {
        const {id}= req.params
        const deletedAlbum= await deleteAlbum(id)
        res.status(200).json(deletdAlbum)
    } catch (error) {
        res.status(404).json({error: "Id not found"})
    }
})


//UPDATE 

albums.put('/:id', async (req, res)=>{
    try {
        const {id} = req.params
        const updatedAlbum = await updateAlbum(id, req.body)
        res.status(200).json(updatedAlbum)
    } catch (error) {
        res.status(404).json({error:"album not found!"})
    }
})


module.exports = albums;