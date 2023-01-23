DROP DATABASE IF EXISTS tuner;
CREATE DATABASE tuner;

\c tuner;

CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);

DROP TABLE IF EXISTS playlist;

CREATE TABLE playlist (
 id SERIAL PRIMARY KEY,
 title VARCHAR(30),
 num_of_songs INTEGER,
 song_id INTEGER REFERENCES songs (id)
 ON DELETE CASCADE
);