const db = require("../db/dbConfig");

const getAllSongs = async (playlistId) => {
  try {
    const allSongs = await db.any(
      "SELECT * FROM songs WHERE playlist_id=$1",
      playlistId
    );
    return allSongs;
  } catch (error) {
    return error;
  }
};

const getSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return song;
  } catch (error) {
    return error;
  }
};

const createSong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite, playlist_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        song.name,
        song.artist,
        song.album,
        song.time,
        song.is_favorite,
        song.playlist_id,
      ]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};

const updateSong = async (id, song) => {
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};

const filterAndSort = async (filter, order, playlistId) => {
  try {
    if (filter === undefined) {
      if (order.toUpperCase() === "ASC") {
        return await db.any(
          "SELECT * FROM songs WHERE playlist_id=$1 ORDER BY name ASC",
          playlistId
        );
      }
      if (order.toUpperCase() === "DESC") {
        return await db.any(
          "SELECT * FROM songs WHERE playlist_id=$1 ORDER BY name DESC",
          playlistId
        );
      }
    }
    if (order === undefined) {
      return await db.any(
        "SELECT * FROM songs WHERE is_favorite=$1 and playlist_id=$2",
        [filter, playlistId]
      );
    }
    if (order.toUpperCase() === "ASC") {
      return await db.any(
        "SELECT * FROM songs WHERE is_favorite=$1 AND playlist_id=$2 ORDER BY name ASC",
        [filter, playlistId]
      );
    }
    if (order.toUpperCase() === "DESC") {
      return await db.any(
        "SELECT * FROM songs WHERE is_favorite=$1 AND playlist_id=$2 ORDER BY name DESC",
        [filter, playlistId]
      );
    }
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
  filterAndSort,
};
