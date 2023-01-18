//! Check Name
const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Please enter a name!" });
  }
};

//! Check for Artist
const checkArtist = (req, res, next) => {
  if (req.body.artist) {
    next();
  } else {
    res.status(400).json({ error: "Please enter an artist name!" });
  }
};
// CHECK FOR IS_FAV
const checkBoolean = (req, res, next) => {
       const favorite = req.body.is_favorite; 
    if (typeof favorite === 'boolean' || favorite === undefined)
  
     {
      next();
    } else {
      res.status(400).json({ error: "is_favorite must be a boolean value" });
    }
  };
  
  module.exports = { checkName, checkArtist,checkBoolean  };
  
