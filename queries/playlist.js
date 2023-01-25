const db = require("../db/dbConfig")

// Index playlist
const getAllPlaylist = async (playlistId) => {
  try {
    const allPlaylist = await db.any(
      "SELECT * FROM playlist WHERE songs_id=$1",
      playlistId
    )
    return allPlaylist
  } catch (error) {
    return error
  }
}

// get one playlist
const getOnePlaylist = async (id) => {
  try {
    const onePlaylist = await db.one("SELECT * FROM playlist WHERE id=$1", id)
    return onePlaylist
  } catch (error) {
    return error
  }
}

// create a playlist
const createPlaylist = async (playlist) => {
  try {
    const createdOnePlaylist = await db.one(
      "INSERT INTO playlist(title, genre) VALUES($1, $2) RETURNING *",
      [playlist.title, playlist.genre]
    )
    return createdOnePlaylist
  } catch (error) {
    return error
  }
}

// delete a playlist
const deletePlaylist = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlist WHERE id=$1 RETURNING * ",
      id
    )
    return deletedPlaylist
  } catch (error) {
    return error
  }
}

// Update a playlist
const updatePlaylist = async (id, playlist) => {
  try {
    const updatedPlaylist = await db.one(
      "UPDATE playlist SET title=$1, genre=$2 WHERE id=$3 RETURNING *",
      [playlist.title, playlist.genre, id]
    )
    return updatedPlaylist
  } catch (error) {
    return error
  }
}
module.exports = {
  getAllPlaylist,
  createPlaylist,
  deletePlaylist,
  getOnePlaylist,
  updatePlaylist,
}
