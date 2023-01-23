DROP DATABASE IF EXISTS tuner;
CREATE DATABASE tuner;

\c tuner;

CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS playlist;

CREATE TABLE playlist (
 id SERIAL PRIMARY KEY,
 title TEXT,
--  name TEXT,
 num_of_tracks INTEGER,
 songb_id INTEGER REFERENCES songs(id)
 ON DELETE CASCADE
);