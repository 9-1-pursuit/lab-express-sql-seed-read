const checkName = (req, res, next) => {
    console.log('validations console.log of "req.body": ',req.body)
    console.log('checking name...')
    if (req.body.name !== null) {
        next()
      console.log("name value is present");
    } else {
      res.status(400).json({ error: "Name is required" });
    }
  };

const checkArtist = (req, res, next) => {
    console.log('checking arist ...')
    if (req.body.artist !== null) {
        next()
      console.log("artist value is present");
    } else {
      res.status(400).json({ error: "artist is required" });
    }
  };


const checkBoolean = (req, res, next) => {
    if (req.body.is_favorite===true ||
         req.body.is_favorite===false ||
         req.body.is_favorite=== undefined
         ) {
      next();
    } else {
      res.status(400).json({ error: "is_favorite must be a boolean value" });
    }
  };

  module.exports = { checkName, checkBoolean, checkArtist };