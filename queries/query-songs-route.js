const database = require("../database/databaseConfig.js")

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

module.exports = { getQueriedSongs }