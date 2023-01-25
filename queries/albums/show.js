const database = require("../../database/databaseConfig.js")

async function getOneAlbum(idValue) {
    try {
        const oneAlbum = await database.one('SELECT * FROM albums WHERE id= $1', idValue)
        return oneAlbum
    } 
    catch (err) {
        return err
    }
}

module.exports = { 
    getOneAlbum
}