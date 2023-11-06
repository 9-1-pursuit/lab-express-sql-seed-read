const database = require("../../database/databaseConfig.js");

async function updateAlbum(idValue, obj) {
  try {
    const updatedAlbum = await database.one(
      "UPDATE albums SET album_artist=$2, released=$3, units_sold=$4, album_name=$5 WHERE id =$1 RETURNING *",
      [
        idValue, 
        obj.album_artist, 
        obj.released, 
        obj.units_sold, 
        obj.album_name
      ]
    );
    return updatedAlbum
  } 
  catch (err) {
    return err;
  }
}

module.exports = {
    updateAlbum
}
