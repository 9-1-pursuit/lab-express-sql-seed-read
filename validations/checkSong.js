const checkInput = (req, res, next) => {
  const { name, artist, is_favorite } = req.body;
  if (!name) {
    return res.status(400).json({ error: "name is required" });
  }
  if (!artist) {
    return res.status(400).json({ error: "artist is required" });
  }
  if (typeof is_favorite !== "boolean" || is_favorite === undefined) {
    return res
      .status(400)
      .json({ error: "is_favorite must be a boolean value" });
  }
  next();
};

module.exports = { checkInput };
