DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE playlist (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 description TEXT,
 is_favorite BOOLEAN
);



DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN,
 playlist_id INTEGER REFERENCES playlist (id)
  ON DELETE CASCADE
);