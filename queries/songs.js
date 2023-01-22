const db = require('../db/dbConfig');

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM seed")
        // console.log('test')
        return allSongs;
    } catch (error) {
        return error;
    }
}

const getSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM seed WHERE id=$1", id)
        // console.log(oneSong)
        return oneSong
    } catch (error) {
        return error;
    }
}

const createSong = async (song) => {
    try {
        const newSong = await db.one(
            "INSERT INTO seed (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [song.name, song.artist, song.album, song.time, song.is_favorite]
        )
        return newSong
    } catch (error) {
        return error
    }
}

const destroySong = async (id) => {
    try {
        const deletedSong = await db.one("DELETE FROM seed WHERE id=$1 RETURNING *", id)
        return deletedSong
    } catch (error) {
        return error
    }
}

// UPDATE
const updateSong = async (id, song) => {
    try {
        const updatedSong = await db.one("UPDATE seed SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
        [song.name, song.artist, song.album, song.time, song.is_favorite, id])
        return updatedSong
    } catch (error) {
        return error
    }
}

module.exports = { getAllSongs, getSong, createSong, destroySong, updateSong }