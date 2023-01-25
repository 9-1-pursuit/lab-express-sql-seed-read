const database = require("../../database/databaseConfig.js")
// Question on why/ how song_id would be an inserted value? would be entered after a query into a databse for a match, then that column value can be populated ??

async function createAlbum(obj) {
    try {
        const newAlbum = await database.one('INSERT INTO albums (album_artist, released, units_sold, album_name) VALUES ($1, $2, $3, $4) RETURNING *', [obj.album_artist, obj.released, obj.units_sold, obj.album_name])
        return newAlbum
    } 
    catch (err) {
        return err
    }
}

module.exports = {
    createAlbum
}