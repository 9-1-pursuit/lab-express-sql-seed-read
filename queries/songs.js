const db = require('../db/dbConfig')

const getAllSongs = async () => {
try{
const allSongs = await db.any('SELECT * FROM songs')
return allSongs
}
catch(error){
    return error;
}
}




const getSong = async (id) => {
    try{
        const oneSong = await db.one('SELECT * FROM songs WHERE id=$1', id)
        return oneSong
    }
    catch(error){
        return error
    }
}



const createSong = async (song) => {
    try{
        const newSong = await db.one(
            "INSERT INTO songs (name , album , time , is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
            [song.name , song.album , song.time , song.is_favorite]
        );
        return newSong
    }
    catch(error){
        return error
    }
}


const deleteSong = async (id) => {
    try{
        const deleteSong = await db.one(
            'DELETE FROM songs WHERE id = $1 RETURNING *', id
        )
        return deleteSong
    }
    catch(error){
        return error
    }
}


const updateSong = async (id , song) => {
    try{
        const updatedSong = await db.one(
            'UPDATE songs SET name=$1 , album=$2 , time=$3, is_favorite=$4 where id=$5 RETURNING *',
            [song.name , song.album , song.time , song.is_favorite, id]
        )
        return updatedSong
    }
    catch(error){
        return error
    }
}


module.exports = { getAllSongs , getSong, createSong , deleteSong , updateSong  };