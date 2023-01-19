const database = require("../../database/databaseConfig.js");

// Create/ add new song object -> .one() use INSERT INTO, VALUES keywords with RETURNING keyword to return the inserted row/obj
async function createSong(obj) {
  // add conditionals to check req.body for key/column values in order to alter the sql command and if ommitted, the DEFAULT value in schema will be applied instead of NULL

  if (!obj.album && !obj.time) {
    try {
      const newSong = await database.one(
        "INSERT INTO songs(name, artist, is_favorite) VALUES ($1, $2, $3) RETURNING *",
        [
            obj.name, 
            obj.artist, 
            obj.is_favorite
        ]
      );
      return newSong;
    } catch (err) {
      return err;
    }
  } else if (!obj.album || !obj.time) {
    if (!obj.album) {
      try {
        const newSong = await database.one(
          "INSERT INTO songs(name, artist, time, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *",
        [
            obj.name, 
            obj.artist, 
            obj.time, 
            obj.is_favorite
        ]
        );
        return newSong;
      } catch (err) {
        return err;
      }
    } else if (!obj.time) {
      try {
        const newSong = await database.one(
          "INSERT INTO songs(name, artist, album, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *",
        [
            obj.name, 
            obj.artist, 
            obj.album, 
            obj.is_favorite
        ]
        );
        return newSong;
      } catch (err) {
        return err;
      }
    }
  } else {
    try {
      const newSong = await database.one(
        "INSERT INTO songs(name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [
            obj.name, 
            obj.artist, 
            obj.album, 
            obj.time, 
            obj.is_favorite
        ]
      );
      return newSong;
    } catch (err) {
      return err;
    }
  }
}

module.exports = { createSong };
