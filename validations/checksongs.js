const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkArtist = (req, res, next) => {
  if (req.body.artist) {
    next();
  } else {
    res.status(400).json({ error: "Artist is required" });
  }
};

const checkBoolean = (req, res, next) => {
  //How to validate that the value of req.body.is_favorite is deeply equal to a boolean => if(typeof req.body.is_favorite === "boolean)

  // Why didn't the above logic work for the test??
  if (req.body.is_favorite) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};

module.exports = { checkName, checkArtist, checkBoolean };
