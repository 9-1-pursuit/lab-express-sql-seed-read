const db = require("../db/dbConfig")

// get all artist
const getAllArtist = async () => {
  try {
    const allArtist = await db.any("SELECT * FROM artists")
    return allArtist
  } catch (error) {
    return error
  }
}

// get one artist
const getOneArtist = async (id) => {
  try {
    const oneArtist = await db.one("SELECT * FROM artists WHERE id=$1", id)
    return oneArtist
  } catch (error) {
    return error
  }
}

// // create a artist
const createArtist = async (artist) => {
  try {
    const createdOneArtist = await db.one(
      "INSERT INTO artists (title, genre) VALUES($1, $2) RETURNING *",
      [artist.title, artist.genre]
    )
    return createdOneArtist
  } catch (error) {
    return error
  }
}
// delete a playlist
const deleteArtist = async (id) => {
  try {
    const deletedArtist = await db.one(
      "DELETE FROM artists WHERE id=$1 RETURNING * ",
      id
    )
    return deletedArtist
  } catch (error) {
    return error
  }
}

// Update a playlist
const updateArtist = async (id, artist) => {
  try {
    const updatedArtist = await db.one(
      "UPDATE artists SET title=$1, genre=$2 WHERE id=$3 RETURNING *",
      [artist.name, artist.album, id]
    )
    return updatedArtist
  } catch (error) {
    return error
  }
}
module.exports = {
  getAllArtist,
  updateArtist,
  createArtist,
  deleteArtist,
  getOneArtist,
}
