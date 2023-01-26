DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    creator TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <= 5)
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOL,
    playlist_id INTEGER REFERENCES playlists (id)
    ON DELETE CASCADE
);