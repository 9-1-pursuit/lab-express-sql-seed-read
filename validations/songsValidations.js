const { body } = require("express-validator")

// validation function using express validator
const schemaCheck = [
    body('name').exists({checkFalsy: true}),
    body('artist').exists({checkFalsy: true}),
    body('is_favorite').isBoolean()
]





module.exports = {
    schemaCheck
}