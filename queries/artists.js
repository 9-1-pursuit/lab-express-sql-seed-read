const db = require("../db/dbConfig")

// get all artist
const getAllArtist = async (songs_id) => {
  if (songs_id === true) {
    try {
      const allArtistofOne = await db.any(
        "SELECT * FROM artists WHERE songs_id=$1",
        songs_id
      )
      return allArtistofOne
    } catch (error) {
      return error
    }
  } else {
    try {
      const allArtist = await db.any("SELECT * FROM artists")
      return allArtist
    } catch (error) {
      return error
    }
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
      [artist.name, artist.album, artist.released, songs_id]
    )
    return createdOneArtist
  } catch (error) {
    return error
  }
}
// delete a artist
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

// Update a artist
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
