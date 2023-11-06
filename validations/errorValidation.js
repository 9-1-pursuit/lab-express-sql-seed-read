const { validationResult } = require("express-validator")

// validationResult for error return handling function (repetitive)
const validationError = (req, resp, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }
    next()
}

module.exports = {
    validationError
}