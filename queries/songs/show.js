// import database configuration into this file
const database = require("../../database/databaseConfig.js")

// Get one specific song based on id -> database.one() -> $1 (for substituting variables)
async function getOneSong(idValue) {
    try {
        const oneSong = await database.one('SELECT * FROM songs WHERE id = $1', idValue)
        return oneSong
    } catch(err){
        return err
    }
}


module.exports = { getOneSong }