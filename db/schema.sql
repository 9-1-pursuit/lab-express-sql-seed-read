DROP DATABASE IF EXISTS seed_dev;
CREATE DATABASE seed_dev;

\c seed_dev;

DROP TABLE IF EXISTS albums;

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN,
 albums_id INTEGER REFERENCES albums (id)
    ON DELETE CASCADE
);

