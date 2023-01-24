const database = require("../../database/databaseConfig.js")

async function getOneAlbum(idValue) {
    try {
        const oneAlbum = await database.one('SELECT * FROM albums WHERE id= $1', idValue)
        return oneAlbum
    } catch(err) {
        return err
    }
}

// function for songs from an album -> .any() can be multiple
async function getSongsFromAlbum(idValue) {
    try {
        const songs = await database.any('SELECT songs.id, name AS song_name, artist, album, albums.id AS album_id, is_favorite, time FROM albums INNER JOIN songs ON song_id = songs.id WHERE albums.id = $1', idValue)
        return songs
    } catch(err) {
        return err
    }
}

module.exports = { 
    getOneAlbum,
    getSongsFromAlbum, 
}