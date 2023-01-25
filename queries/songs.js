const db = require("../db/dbConfig")


const getAllSong = async (playlist_id) => {
    try {
    const allSong = await db.any(
    "SELECT * FROM songs WHERE playlist_id=$1",
    playlist_id
    );
    return allSong;
    } catch (err) {
    return err;
    }
}
    


const getSong = async (id) => {
    try{
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
            return oneSong
        }
        catch(error){
            return error
        }
    }

const createSong = async (song) => {
    try{
        const newSong = await db.one(
            'INSERT INTO songs (name, artist, album, time, is_favorite, playlist_id) VALUES ($1 , $2, $3, $4, $5, $6) RETURNING *',
            [song.name, song.artist, song.album, song.time, song.is_favorite, song.playlist_id]
        )
        return newSong
    }
    catch(error){
        return error
    }
}

const deleteSong= async (id) => {
    try{
        const deletedSong = await db.one(
            'DELETE FROM songs WHERE id = $1 RETURNING *', id
        )
        return deletedSong
    }
    catch(error){
        return error
    }
}


const updateSong = async (id, song) => {
    try {
      const updatedSong = await db.one(
        "UPDATE songs SET name=$1, album=$2, time=$3, is_favorite=$4, artist=$5 WHERE id=$6 RETURNING *",
        [song.name, song.album, song.time, song.is_favorite, song.artist, id]
      );
      return updatedSong;
    } catch (error) {
      return error;
    }
  };





module.exports={ getAllSong, getSong , createSong, deleteSong, updateSong }