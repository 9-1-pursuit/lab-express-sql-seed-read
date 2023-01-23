DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 album TEXT NOT NULL,
 time TEXT,
 is_favorite BOOLEAN
);



DROP TABLE IF EXISTS playlist;

CREATE TABLE playlist (
 id SERIAL PRIMARY KEY,
 name TEXT,
 song_id INTEGER REFERENCES songs (id)
 ON DELETE CASCADE
);