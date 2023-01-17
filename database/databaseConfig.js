// after updating values in .env file
// pg-promise -> postgres-Promise -> connect server to make requests to postgres database

const pgp = require("pg-promise")()
require("dotenv").config()


// Connection Object, use values from .env file
const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
}

// open the connection with const db = pgp(cn);
const database = pgp(cn)

module.exports = database
