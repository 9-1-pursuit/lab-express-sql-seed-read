const database = require("../../database/databaseConfig.js")

// add parameter for function for merged parameter route path /albums/:albumId/songs
async function getAllSongs(idValue=false) {
    if(idValue){
        try {
            const allSongs = await database.any('SELECT * FROM songs WHERE album_id = $1', idValue)
            return allSongs
        } 
        catch (err) {
            return err
        }
    }
    else {
        // keep route to get all songs available
        try {
            const allSongs = await database.any('SELECT * FROM songs')
            return allSongs
        } catch(err) {
            return err
        }
    }   
}

module.exports = { getAllSongs }
