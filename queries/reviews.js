const db = require("../db/dbConfig");

//INDEX
const getAllReviews = async (song_id) => {
  try {
    const allReviews = await db.any("SELECT * FROM reviews WHERE song_id=$1", song_id);
    return allReviews;
  } catch (error) {
    return error;
  }
};

// SHOW
const getReview = async (id) => {
  try {
    const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return oneReview;
  } catch (error) {
    return error;
  }
};

// CREATE
const createReview = async (review) => {
  try {
    const newReview = await db.one(
      "INSERT INTO reviews(reviewer,content,rating,song_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        review.reviewer,
        review.content,
        review.rating,
        review.song_id,
      ]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteReview = async (id) => {
    try {
      const deletedReview = await db.one(
        "DELETE FROM reviews WHERE id=$1 RETURNING *",
        id
      );
      return deletedReview;
    } catch (error) {
      return error;
    }
  };

  // UPDATE
const updateReview = async (id, review) => {
    try {
      const updatedReview = await db.one(
        "UPDATE reviews SET reviewer=$1,  content=$2, rating=$3 WHERE id=$4 RETURNING *",
        [review.reviewer, review.content,review.rating, id]
      )
      return updatedReview;
    } catch (error) {
      return error;
    }
  };

module.exports = {
    getAllReviews,
    getReview,
    createReview,
    deleteReview,
    updateReview
}