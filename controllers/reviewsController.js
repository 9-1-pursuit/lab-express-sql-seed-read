const express = require("express")
const reviews = express.Router({ mergeParams: true });
const { indexReviews, showReview, createReview, deleteReview, updateReview } = require('../queries/reviews')



// INDEX
reviews.get('/', async (req, res) => {
        const { songId } = req.params;
        try {
          const allReviews = await indexReviews(songId);
          res.status(200).json(allReviews);
        } catch (err) {
          res.status(400).json(err);
        }
})


// SHOW
reviews.get('/:id', async (req, res) => {
    const { id } = req.params
    const review = await showReview(id)
    if(!review.message){
        res.status(200).json(review)
    } else {
        res.status(404).json({ error: "Not found" })
    }
})

// CREATE
reviews.post('/', async (req, res) => {
    try {
        const review = await createReview(req.body)
        res.status(200).json(review)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})


// DELETE
reviews.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deletedReview = await deleteReview(id)
        res.status(200).json(deletedReview)
    } catch (error) {
        res.status(404).json({ error: "Id not found" })
    }
})


// UPDATE
reviews.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const updatedReview = await updateReview(id, req.body)
        res.status(200).json(updatedReview)
    } catch (error) {
        res.status(404).json({ error: 'review not found!' })
    }
})


module.exports = reviews;