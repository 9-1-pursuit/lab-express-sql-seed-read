const db = require("../db/dbConfig")

// Index playlist
const getAllPlaylist = async (songs_id) => {
  if (songs_id === true) {
    try {
      const allPlaylist = await db.any(
        "SELECT * FROM playlists WHERE songs_id=$1",
        playlistId
      )
      return allPlaylist
    } catch (error) {
      return error
    }
  } else {
    try {
      const allPlaylist = await db.any("SELECT * FROM playlists ")
    } catch (error) {
      return error
    }
  }
}

// get one playlist
const getOnePlaylist = async (id) => {
  try {
    const onePlaylist = await db.one("SELECT * FROM playlists WHERE id=$1", id)
    return onePlaylist
  } catch (error) {
    return error
  }
}

// create a playlist
const createPlaylist = async (playlist) => {
  try {
    const createdOnePlaylist = await db.one(
      "INSERT INTO playlists(title, genre) VALUES($1, $2) RETURNING *",
      [playlist.title, playlist.genre, songs_id]
    )
    return createdOnePlaylist
  } catch (error) {
    return error
  }
}
s
// delete a playlist
const deletePlaylist = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlists WHERE id=$1 RETURNING * ",
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
      "UPDATE playlists SET title=$1, genre=$2 WHERE id=$3 RETURNING *",
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
