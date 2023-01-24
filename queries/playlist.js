const db = require('../db/dbConfig');

const getAllPlaylists = async (songId) => {
  try {
    const allPlaylists = await db.any(
      'SELECT * FROM playlist WHERE song_id = $1',
      songId
    );
    return allPlaylists;
  } catch (error) {
    return error;
  }\
};

const getPlaylist = async (id) => {
  try {
    const singlePlaylist = await db.one(
      'SELECT * FROM playlist WHERE id = $1',
      id
    );
    return singlePlaylist;
  } catch (error) {
    return error;
  }
};

const makePlaylist = async (playlist) => {
  try {
    const newPlaylist = await db.one(
      'INSERT INTO playlist (title) VALUES ($1) RETURNING *',
      [playlist.title]
    );
    return newPlaylist;
  } catch (error) {
    return error;
  }
};

const deletePlaylist = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      'DELETE FROM playlist WHERE id = $1',
      id
    );
    return deletedPlaylist;
  } catch (error) {
    return error;
  }
};

const updatePlaylist = async (id, playlist) => {
  try {
    const updatedPlaylist = await db.one(
      'UPDATE playlist SET title= $1 WHERE id = $2 RETURNING *',
      [playlist.title]
    );
    return updatedPlaylist;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPlaylists,
  getPlaylist,
  makePlaylist,
  deletePlaylist,
  updatePlaylist,
};
