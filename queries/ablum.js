const db = require("../db/dbConfig")

// get all album
const getAllAlbum = async () => {
  try {
    const allAlbum = await db.any("SELECT * FROM album")
    return allAlbum
  } catch (error) {
    return error
  }
}

// get one album
const getOneAlbum = async () => {
  try {
    const oneAlbum = await db.one("SELECT * FROM album WHERE id=$1", id)
    return oneAlbum
  } catch (error) {
    return error
  }
}

// create a playlist
const createAlbum = async (album) => {
  try {
    const createdOneAlbum = await db.one(
      "INSERT INTO album(name, artist, released) VALUES($1, $2, $3) RETURNING *",
      [album.name, album.artist, album.released]
    )
    return createdOneAlbum
  } catch (error) {
    return error
  }
}
// delete a album
const deleteAlbum = async (id) => {
  try {
    const deletedAlbum = await db.one(
      "DELETE FROM album WHERE id=$1 RETURNING * ",
      id
    )
    return deletedAlbum
  } catch (error) {
    return error
  }
}

// Update a album
const updateAlbum = async (id, album) => {
  try {
    const updatedAlbum = await db.one(
      "UPDATE album SET name=$1, artist=$2, released=$3 WHERE id=$4 RETURNING *",
      [album.name, album.artist, album.released]
    )
    return updatedAlbum
  } catch (error) {
    return error
  }
}
module.exports = {
  getAllAlbum,
  getOneAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum,
}
