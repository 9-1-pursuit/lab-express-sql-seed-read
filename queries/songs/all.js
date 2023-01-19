const database = require("../../database/databaseConfig.js")

async function getAllSongs() {
    try {
        const allSongs = await database.any('SELECT * FROM songs')
        return allSongs
    } catch(err) {
        return err
    }
}

module.exports = { getAllSongs }
