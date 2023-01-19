const songs = require("../controllers/songController")
const { one } = require("../db/dbConfig")
const db = require("../db/dbConfig")

// async function call the data
// db.any() function takes first str as arg,
// .any = means it will accept any return from database
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs")
    return allSongs
  } catch (error) {
    return error
  }
}
// ONE - SHOW
const getSong = async (id) => {
  try {
    const getOneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
    return getOneSong
  } catch (error) {
    return error
  }
}
// CREATE route
const createSong = async (songs) => {
  try {
    const createOneSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $$) RETURNING *",
      [songs.name, songs.artist, songs.album, songs.time, songs.is_favorite]
    )
    return createOneSong
  } catch (error) {
    return error
  }
}

//DELETE route
const deleteSong = async (id) => {
  try {
    const deletedOneSong = await db.one(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
      id
    )
    return deletedOneSong
  } catch (error) {
    return error
  }
}

// Update route
module.exports = { getAllSongs, getSong, createSong, deleteSong }
