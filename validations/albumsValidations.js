const { body } = require("express-validator")

const albumSchema = [
    body('album_name').exists({checkFalsy: true}),
    body('released').isInt(),
    body('units_sold').isInt(),
    body('album_artist').isString()
]

module.exports = {
    albumSchema
}