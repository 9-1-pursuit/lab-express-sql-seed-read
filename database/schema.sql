DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT DEFAULT 'Unknown',
    time TEXT DEFAULT 'Unknown',
    is_favorite BOOL
);

CREATE TABLE albums (
    album_id serial PRIMARY KEY,
    album_artist TEXT,
    released INTEGER,
    units_sold INTEGER,
    album_name TEXT NOT NULL REFERENCES songs (album)
    ON DELETE CASCADE 
)

/* 
     - Run this code in terminal to run schema file :
    npm run dbinit
 */
