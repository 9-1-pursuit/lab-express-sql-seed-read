const db = require('../db/dbConfig');

const getAllAlbums = async () => {
    try {
        const allAlbums = await db.any('SELECT * FROM albums')
        return allAlbums
    } catch (error) {
        return error
    }
}

const getAlbum = async (id) => {
    try {
        const oneAlbum = await db.one("SELECT * FROM albums WHERE ID=$1", id)
        return oneAlbum
    } catch (error) {
        return error;
    }
}

const createAlbum = async (album) => {
    try {
        const newAlbum = await db.one(
            "INSERT INTO albums (title, artist, is_favorite, song_id) VALUES($1, $2, $3, $4) RETURNING *",
            [album.title, album.artist, album.is_favorite, album.song_id]
        )
        return newAlbum
    } catch (error) {
        return error
    }
}

const destroyAlbum = async (id) => {
    try {
        const deletedAlbum = await db.one("DELETE FROM albums WHERE id=$1 RETURNING *", id)
        return deletedAlbum
    } catch (error) {
        return error
    }
}

// UPDATE
const updateAlbum = async (id, album) => {
    try {
        const updatedAlbum = await db.one("UPDATE albums SET title=$1, artist=$2, is_favorite=$3, song_id=$4 WHERE id=$5 RETURNING *",
        [album.title, album.artist, album.is_favorite, album.song_id, id]
        )
        return updatedAlbum
    } catch (error) {
        return error
    }
}

module.exports = { getAllAlbums, getAlbum, createAlbum, destroyAlbum, updateAlbum }