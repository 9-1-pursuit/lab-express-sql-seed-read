DROP DATABASE IF EXISTS tuner_songs;
CREATE DATABASE tuner_songs;

\c tuner_songs;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS artists;

CREATE TABLE artists (
 id SERIAL PRIMARY KEY,
 name TEXT,
 genre TEXT,
 label TEXT,
 listens_per_week NUMERIC,
 CHECK (istens_per_week >= 0),
 song_id INTEGER REFERENCES songs (id)
 ON DELETE CASCADE
);
