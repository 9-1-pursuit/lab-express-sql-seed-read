const db = require('../db/dbConfig');

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM seed")
        console.log('test')
        return allSongs;
    } catch (error) {
        return error;
    }
}

const getSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM seed WHERE id=$1", id)
        console.log(oneSong)
        return oneSong
    } catch (error) {
        return error;
    }
}

module.exports = { getAllSongs, getSong}