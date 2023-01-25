const express = require("express");
const comments = express.Router({ mergeParams: true });
const {
  getAllComments,
  getComment,
  createComment,
  deleteComment,
  updateComment,
} = require("../queries/comments");

// INDEX
comments.get("/", async (req, res) => {
  const { songs_id } = req.params;

  try {
    const allComments = await getAllComments(songs_id);
    res.json(allComments);
  } catch (err) {
    res.json(err);
  }
});

// SHOW
comments.get("/:id", async (req, res) => {
  const { id } = req.params;
  const comment = await getComment(id);
  if (!comment.message) {
    res.status(200).json(comment);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

// CREATE
comments.post("/", async (req, res) => {
  try {
    const comment = await createComment(req.body);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE
comments.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedComment = await deleteComment(id);
    res.status(200).json(deletedComment);
  } catch (error) {
    res.status(404).json({ error: "Id not found" });
  }
});

// UPDATE
comments.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedComment = await updateComment(id, req.body);
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(404).json({ error: "comment not found!" });
  }
});

module.exports = comments;
