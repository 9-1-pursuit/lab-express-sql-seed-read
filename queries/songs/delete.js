const database = require("../../database/databaseConfig.js")

// DELETE A SONG -> .one() -> use DELETE FROM, WHERE and RETURNING keyword 
async function deleteSong(idValue) {
    try{
        const deletedSong = await database.one('DELETE FROM songs WHERE id = $1 RETURNING *', idValue)
        return deletedSong
    } catch(err) {
        return err
    }
}

module.exports = { deleteSong }