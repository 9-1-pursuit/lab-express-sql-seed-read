const database = require("../../database/databaseConfig.js")

async function getAllAlbums() {
    try {
        const allAlbums = await database.any('SELECT album_id, album_name, artist, id AS song_id FROM albums LEFT JOIN songs ON album_name = album')
        return allAlbums
    } catch(err) {
        return err
    }
}

module.exports = { getAllAlbums }