// function to check if their is name present
const checkSongName = (req, res, name) => {
  console.log(" check for song name")
  req.body.name === true
    ? next()
    : res.status(400).json({ error: "Name is required" })
}

// function to check if there is artist name present
const checkSongArtist = (req, res, artist) => {
  console.log("check for artist of song")
  req.body.artist === true
    ? next()
    : res.status(400).json({ error: "Artist is required" })
}

// function to check for true or false
const checkBoolean = (req, res, next) => {
  req.body.is_favorite === true || false || undefined
    ? next()
    : res
        .status(400)
        .json({ error: "there must be a true or false value for is_favorite" })
}
module.exports = { checkSongName, checkSongArtist, checkBoolean }
