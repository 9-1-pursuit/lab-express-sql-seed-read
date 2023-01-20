const database = require("../../database/databaseConfig.js")

async function getOneAlbum(idValue) {
    try {
        const oneAlbum = await database.one('SELECT DISTINCT album_id, album_name, artist FROM albums LEFT JOIN songs ON album_name = album WHERE album_id = $1', idValue)
        return oneAlbum
    } catch(err) {
        return err
    }
}

// function for songs from an album -> .any() can be multiple
async function getSongsFromAlbum(idValue) {
    try {
        const songs = await database.any('SELECT name FROM albums LEFT JOIN songs ON album_name = album WHERE album_id = $1', idValue)
        return songs
    } catch(err) {
        return err
    }
}

module.exports = { 
    getOneAlbum,
    getSongsFromAlbum, 
}