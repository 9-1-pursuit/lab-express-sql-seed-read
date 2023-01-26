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
      "INSERT INTO artists (name, album, released) VALUES($1, $2, $3) RETURNING *",
      [artist.name, artist.album, artist.released]
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
      "UPDATE artists SET name=$1, album=$2,  released=$3, WHERE id=$4 RETURNING *",
      [artist.name, artist.album, artist.released, id]
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
