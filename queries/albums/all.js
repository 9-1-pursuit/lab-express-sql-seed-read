const database = require("../../database/databaseConfig.js")

// add parameter for function for merged parameter route path /songs/:songId/albums
async function getAllAlbums(idValue=false) {
    if(idValue){
        try {
           
            
        } catch (error) {
            
        }
    }

    try {
        const allAlbums = await database.any('SELECT DISTINCT * FROM albums ')
        return allAlbums
    } catch(err) {
        return err
    }
}

module.exports = { getAllAlbums }