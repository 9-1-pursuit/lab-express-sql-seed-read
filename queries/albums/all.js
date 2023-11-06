const database = require("../../database/databaseConfig.js")

async function getAllAlbums() {
    try {
        const allAlbums = await database.any('SELECT DISTINCT * FROM albums ')
        return allAlbums
    } 
    catch(err) {
        return err
    }
}

module.exports = { getAllAlbums }