const db = require("../db/Config")

// Index
const getAllArtists = async ( song_id ) => {
    try {
      const allArtists = await db.any('SELECT * FROM artists WHERE song_id=$1', 
      song_id
      );
      return allArtists
    } catch (error) {
      return error
    }
}
// Show
const getArtist = async (id) => {
    try {
      const oneArtist = await db.one('SELECT * FROM artists WHERE id=$1', id);
      return oneArtist;
    } catch (error) {
      return error;
    }
  };

// CREATE
const createArtist = async (artist) => {
    try {
      const newArtist = await db.one(
        'INSERT INTO artists (name, genre, label, listens_per_week) VALUES($1, $2, $3, $4) RETURNING *',
        [artist.name, artist.genre, artist.label, artist.listens_per_week]
      );
      return newArtist;
    } catch (error) {
      return error;
    }
  };

// Delete
const deleteArtist = async (id) => {
    try {
        const deletedArtist = await db.one(
        'DELETE FROM artists WHERE id = $1 RETURNING *', id
        );
        return deletedArtist;
    } catch (error) {
        return error;
    }
};

//Update 
const updateArtist = async (id, artist) => {
    try {
      const updatedArtist = await db.one(
        'UPDATE artists SET name=$1, genre=$2, label=$3, listens_per_week=$4, WHERE id=$5 RETURNING *',
        [artist.name, artist.genre, artist.label, artist.listens_per_week, id]
      );
      return updatedArtist;
    } catch (error) {
      return error;
    }
  };
  
module.exports = {
    getAllArtists,
    createArtist,
    getArtist,
    deleteArtist,
    updateArtist
};