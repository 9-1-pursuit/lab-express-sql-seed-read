const database = require("../../database/databaseConfig.js")

async function deleteAlbum(idValue) {
    try {
        const deletedAlbum = await database.one('DELETE FROM albums WHERE id = $1 RETURNING *', idValue)
        return deletedAlbum
    } 
    catch (err) {
        return err
    }
}

module.exports = {
    deleteAlbum
}