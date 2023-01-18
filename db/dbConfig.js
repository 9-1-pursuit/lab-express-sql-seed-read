// pg-promise is postgres promise-based node.js client for PostgreSQL
// provide easy way connection to the database

const pgp = require("pg-promise")()
require("dotenv").config()

//  cn is short for connection
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
}

// connecting server with the database
const db = pgp(cn)

module.exports = db
