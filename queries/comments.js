const db = require("../db/dbConfig");

const getAllComments = async () => {
  try {
    const allComments = await db.any("SELECT * FROM comments");
    return allComments;
  } catch (error) {
    return error;
  }
};

const getComment = async (id) => {
  try {
    const oneComment = await db.one("SELECT * FROM comments WHERE id=$1", id);
    return oneComment;
  } catch (error) {
    return error;
  }
};

const createComment = async (comment) => {
  try {
    const newComment = await db.one(
      "INSERT INTO comments (commenter, title, content, songs_id) VALUES($1, $2, $3, $4) RETURNING *",
      [comment.commenter, comment.title, comment.content, comment.songs_id]
    );
    return newComment;
  } catch (error) {
    return error;
  }
};

const deleteComment = async (id) => {
  try {
    const deletedComment = await db.one(
      "DELETE FROM comments WHERE id=$1 RETURNING *",
      id
    );
    return deletedComment;
  } catch (error) {
    return error;
  }
};

const updateComment = async (id, comment) => {
  try {
    const updatedComment = await db.one(
      "UPDATE comments SET commenter=$1, title=$2, content=$3 WHERE id=$4 RETURNING *",
      [comment.commenter, comment.title, comment.content, id]
    );
    return updatedComment;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllComments,
  getComment,
  createComment,
  deleteComment,
  updateComment,
};
