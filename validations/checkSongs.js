const checkAlbum = (req, res, album) => {
  req.body.album === true
    ? next()
    : res.status(400).json({ error: "title is required" })
}

//  function to check if their is title present
const checkTitle = (req, res, title) => {
  req.body.title === true
    ? next()
    : res.status(400).json({ error: "title is required" })
}

// function to check if their is name present
const checkSongName = (req, res, name) => {
  req.body.name === true
    ? next()
    : res.status(400).json({ error: "Name is required" })
}

// function to check if there is artist name present
const checkArtist = (req, res, artist) => {
  req.body.artist === true
    ? next()
    : res.status(400).json({ error: "Artist is required" })
}

// function to check for true or false
const checkBoolean = (req, res, next) => {
  req.body.is_favorite === true ||
  req.body.is_favorite === false ||
  req.body.is_favorite === undefined
    ? next()
    : res
        .status(400)
        .json({ error: "there must be a true or false value for is_favorite" })
}

//  not required but i read it should always be present on website
const validateURL = (req, res, next) => {
  req.body.url.substring(0, 7) === "http://" ||
  req.body.url.substring(0, 8) === "https://"
    ? next()
    : res.status(400).json({ error: "Missing/Error with http:// or https://" })
}

module.exports = {
  checkSongName,
  checkArtist,
  checkBoolean,
  validateURL,
  checkTitle,
}
