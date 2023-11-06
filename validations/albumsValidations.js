const { body } = require("express-validator")

const albumSchema = [
    body('album_name').exists({checkFalsy: true}),
    body('released').isInt().optional({ nullable: true }),
    body('units_sold').isInt().optional({ nullable: true }),
    body('album_artist').isString()
]

module.exports = {
    albumSchema
}