const { body, validationResult} = require("express-validator")

// validation function using express validator
const schemaCheck = [
    body('name').exists({checkFalsy: true}),
    body('artist').exists({checkFalsy: true}),
    body('is_favorite').isBoolean()
]

// validationResult for error return handling function (repetitive)
const validationError = (req, resp, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return resp.status(400).json({ errors: errors.array() });
    }
    next()
}


module.exports = {
    validationError,
    schemaCheck,
}