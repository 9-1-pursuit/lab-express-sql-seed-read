const db = require("../db/dbConfig");

const getAllPLaylists= async (songId) => {
  try {
    const allPlaylists = await db.any("SELECT * FROM playlists WHERE song_id=$1", songId)
    return allPlaylists;
  } catch (error) {
    return error;
  }
};

//get one
const getPlaylist = async (id) => {
  try {
    const onePlaylist = await db.one("SELECT * FROM playlists WHERE id=$1", id);
    return onePlaylist;
  } catch (error) {
    return error;
  }
};

//create new playlist
const createPlaylist = async (playlist) => {
  try {
    const newPlaylist = await db.one(
      "INSERT INTO playlists (name, description, song_id) VALUES($1,$2,$3) RETURNING *",
      [playlist.name, playlist.description, playlist.song_id]
    );
    return newPlaylist;
  } catch (error) {
    return error;
  }
};

//delete playlist
const deletePlaylist = async (id) => {
  try {
    const deletedPlaylist = await db.one(
      "DELETE FROM playlists WHERE id=$1 RETURNING *",
      id
    );
    return deletedPlaylist;
  } catch (error) {
    return error;
  }
};

//update playlist
const updatePlaylist = async (id, playlist) => {
  try {
    const updatedPlaylist = await db.one(
      "UPDATE playlists SET name=$1, description=$2 WHERE id=$3 RETURNING *",
      [playlist.name, playlist.description]
    );
    return updatedPlaylist;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllPLaylists, getPlaylist, createPlaylist, deletePlaylist, updatePlaylist,};