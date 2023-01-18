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

// custom validation without express-validator
const checkAllSchema = (req, resp, next) => {
    const body = req.body
    const {name, artist, album, time} = body
    const favorite = body.is_favorite

    if(!name || !artist || typeof favorite !== "boolean"){
        resp.status(400).json({
            Error: "Missing required inputs name, artist, or is_favorite"
        })
    }
    next()
}


module.exports = {
    checkAllSchema,
    validationError,
    schemaCheck,
}