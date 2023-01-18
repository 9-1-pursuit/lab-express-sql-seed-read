const db = require("../db/dbConfig")

// async function call the data
// db.any() function takes first str as arg,
// .any = means it will accept any return from database
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs")
    return allSongs
  } catch (error) {
    return error
  }
}
module.exports = { getAllSongs }
