const database = require("../../database/databaseConfig.js")
// Question on why/ how song_id would be an inserted value? would be entered after a query into a databse for a match, then that column value can be populated ??

async function createAlbum(obj) {
    try {
        const newAlbum = await database.one('INSERT INTO albums (album_artist, released, units_sold, album_name, song_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [obj.album_artist, obj.released, obj.units_sold, obj.album_name,obj.song_id])
        return newAlbum
    } catch (err) {
        return err
    }
}

module.exports = {
    createAlbum
}