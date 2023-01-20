const database = require("../../database/databaseConfig.js")

async function getAllAlbums() {
    try {
        const allAlbums = await database.any('SELECT name, artist, album_id, id AS song_id, album_name FROM albums LEFT JOIN songs ON album_name = album')
        return allAlbums
    } catch(err) {
        return err
    }
}

module.exports = { getAllAlbums }