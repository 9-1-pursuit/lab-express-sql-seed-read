DROP DATABASE IF EXISTS tuner;
CREATE DATABASE tuner;

\c tuner;

DROP TABLE IF EXISTS playlist;
CREATE TABLE playlist (
 id SERIAL PRIMARY KEY,
 title TEXT
);

CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN,
    playlist_id INTEGER REFERENCES playlist (id) ON DELETE CASCADE
);



