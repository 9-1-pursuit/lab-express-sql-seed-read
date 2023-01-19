// import database configuration into this file
const database = require("../database/databaseConfig.js")

// async await -> try/catch -> database.any()
async function getAllSongs() {
    try {
        const allSongs = await database.any('SELECT * FROM songs')
        return allSongs
    } catch(err) {
        return err
    }
}

//  BONUS ASC/DESC QUERIES
async function getQueriedSongs(obj) {
    if(obj.order){
        if(obj.order === "asc"){
            try{
                const ascOrder = await database.any('SELECT * FROM songs ORDER BY name ASC') 
                return ascOrder
            } catch(err){
                return err
            }
        }
        else if(obj.order === "desc"){
            try{
                const descOrder = await database.any('SELECT * FROM songs ORDER BY name DESC') 
                return descOrder
            } catch(err){
                return err
            }

        }
    }
    if(obj.is_favorite){
        if(obj.is_favorite === "true"){
          try{
            const isFavorite = await database.any('SELECT * FROM songs WHERE is_favorite = true')
            return isFavorite
          } catch(err){
            return err
          }
        }
        else if(obj.is_favorite === "false"){
            try{
              const isNotFavorite = await database.any('SELECT * FROM songs WHERE is_favorite = false')
              return isNotFavorite
            } catch(err){
              return err
            }
          }
    }
    else{
        return undefined
    }
}

// Get one specific song based on id -> database.one() -> $1 (for substituting variables)
async function getOneSong(idValue) {
    try {
        const oneSong = await database.one('SELECT * FROM songs WHERE id = $1', idValue)
        return oneSong
    } catch(err){
        return err
    }
}

// Create/ add new song object -> .one() use INSERT INTO, VALUES keywords with RETURNING keyword to return the inserted row/obj
async function createSong(obj) {
    // add conditionals to check req.body for key/column values in order to alter the sql command and if ommitted, the DEFAULT value in schema will be applied instead of NULL
    try {
        const newSong = await database.one(
        'INSERT INTO songs(name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *', 
        [obj.name, obj.artist, obj.album, obj.time, obj.is_favorite]
        )
        return newSong
    } catch(err) {
        return err
    }
}

// DELETE A SONG -> .one() -> use DELETE FROM, WHERE and RETURNING keyword 
async function deleteSong(idValue) {
    try{
        const deletedSong = await database.one('DELETE FROM songs WHERE id = $1 RETURNING *', idValue)
        return deletedSong
    } catch(err) {
        return err
    }
}

// UPDATE/ EDIT A SONG (idValue, updatedObj)-> .one() -> use UPDATE, SET, WHERE and RETURNING keywords
async function updateSong(idValue, updatedObj) {
    try {
        const updatedSong = database.one('UPDATE songs SET name = $2, artist = $3, album = $4, time = $5, is_favorite = $6 WHERE id = $1 RETURNING *', [idValue, updatedObj.name, updatedObj.artist, updatedObj.album, updatedObj.time, updatedObj.is_favorite])

        return updatedSong
    } catch(err) {
        return err
    }
}



module.exports = {
    getAllSongs,
    getOneSong,
    createSong,
    deleteSong,
    updateSong,
    getQueriedSongs,
}