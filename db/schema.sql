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