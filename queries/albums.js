const db = require("../db/dbConfig")

const getAllAlbums = async (songsId)=>{
    try {
        const allAlbums = await db.any("SELECT * FROM albums WHERE songs_id=$1", songsId)
        return allAlbums
    } catch (error) {
        return error
    }
}

const getOneAlbum = async (id) =>{
    try {
       const oneAlbum = await db.one('SELECT * FROM albums WHERE id=$1', id) 
       return oneAlbum
    } catch (error) {
        return error
    }
}


const createAlbum = async(album)=>{
    try {
        const newAlbum = await db.one('INSERT INTO albums( name, artist, release, length, genre, label, songs_id) VALUES ($1, $2,$3,$4,$5, $6, $7) RETURNING *', [ album.name, album.artist, album.release, album.length, album.genre, album.label, album.songs_id])
        return newAlbum
    } catch (error) {
        return error
    }
}

const deleteAlbum = async (id)=>{
    try {
        const deletedAlbum = await db.one('DELETE FROM albums WHERE id=$1 RETURNING *', id)
        return deletedAlbum
    } catch (error) {
        return error
    }
}

const updateAlbum = async (id, album)=>{
    try {
        const updatedAlbum = await db.one('UPDATE albums SET nname=$1, artist=$2, release=$3, length=$4, genre=$5, label=$6,WHERE id=$7 RETURNING * ', 
        [album.name, album.artist, album.release, album.length, album.genre, album.label, id])
        return updatedAlbum
    } catch (error) {
        return error
    }
}

module.exports = {getAllAlbums, getOneAlbum, createAlbum, deleteAlbum, updateAlbum}