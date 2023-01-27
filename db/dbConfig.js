// DEPENDENCIES
const pgp = require("pg-promise")()

// CONFIGURATION
require('dotenv').config()

// CONNNECTION OBJECT
const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER
}

// pg-promise for connection
const db = pgp(cn)

// EXPORT
module.exports = db;