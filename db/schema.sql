DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS playlists;

CREATE TABLE playlists (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
description TEXT NOT NULL,
song_id INTEGER REFERENCES songs(id)
ON DELETE CASCADE
);

 --run command: psql -U postgres -f db/schema.sql