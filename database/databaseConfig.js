// after updating values in .env file
// pg-promise -> postgres-Promise -> connect server to make requests to postgres database

const pgp = require("pg-promise")()
require("dotenv").config()


// Connection Object, use values from .env file
const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } = process.env;
// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
const cn = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
      password: PG_PASSWORD
    };

// open the connection with const db = pgp(cn);
const database = pgp(cn)

module.exports = database
