const db = require("../db.dbconfig");

// GET ALL ALBUMS
const getAllAlbums = async () => {
  try {
    const allAlbums = await db.any("SELECT * FROM albums");
    return allAlbums;
  } catch (error) {
    return error;
  }
};
// GET ONE REVIEW

const getOneAlbum = async (id) => {
  try {
    const oneAlbum = await db.one("SELECT * FROM albums WHERE id=$1", id);
    return oneAlbum;
  } catch (error) {
    return error;
  }
};

// CREATE
const createAlbum = async (album) => {
  try {
    const newAlbum = await db.one(
      "INSERT INTO albums(song_id, title, released_year, length, genre) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        album.song_id,
        album.title,
        album.released_year,
        album.length,
        album.genre,
      ]
    );
    return newAlbum;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteAlbum = async (id) => {
  try {
    const deletedAlbum = await db.one(
      "DELETE FROM albums id=$1 RETURNING *",
      id
    );
    return deletedAlbum;
  } catch (error) {
    return error;
  }
};

// UPDATE

const updateAlbum = async (id, album) => {
  try {
    const updatedAlbum = await db.one(
      "UPDATE albums SET title=$1, released_year=$2, length=$2, genre=$3 WHERE id=$4 RETURNING *",
      [
        album.song_id,
        album.title,
        album.released_year,
        album.length,
        album.genre,
      ]
    );
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAlbums,
  getOneAlbum,
  createAlbum,
  deleteAlbum,
  updateAlbum,
};
