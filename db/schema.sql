DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;


\c songs_dev;

CREATE TABLE songs (
    id serial primary key,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);

DROP TABLE IF EXISTS albums;

CREATE TABLE albums (
id serial primary key,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 release TEXT,
 length TEXT,
 genre TEXT,
 label TEXT,
songs_id INTEGER REFERENCES songs (id)
 ON DELETE CASCADE
);






