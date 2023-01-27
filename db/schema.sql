DROP DATABASE IF EXISTS albums_dev;
CREATE DATABASE albums_dev;

\c albums_dev;
-- ALBUM
DROP TABLE IF EXISTS albums;

CREATE TABLE albums (
id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
released_year INTEGER NOT NULL,
length TEXT,
genre TEXT
-- song_id INTEGER REFERENCES songs (id) ON DELETE CASCADE

);

DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite boolean, 
   album_id INTEGER REFERENCES albums (id) ON DELETE CASCADE
);



