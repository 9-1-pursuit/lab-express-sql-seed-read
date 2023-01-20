const express = require("express")
const router = express.Router()

const { getAllAlbums } = require("../queries/albums/all.js")

router.get("/", async (req, resp) => {
    const albums = await getAllAlbums()
    resp.status(200).json(albums)
})

module.exports = router