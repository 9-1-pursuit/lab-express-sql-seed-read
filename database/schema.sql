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
    id serial PRIMARY KEY,
    album_artist TEXT,
    released INT,
    units_sold INT,
    album_name TEXT NOT NULL,
    song_id INT NOT NULL REFERENCES songs (id)
    ON DELETE CASCADE 
);

CREATE TABLE playlists (
    id serial PRIMARY KEY,
    playlist_name TEXT NOT NULL,
    song_id INT NOT NULL REFERENCES songs (id)
)
/* 
     - Run this code in terminal to run schema file :
    npm run dbinit
    - ALBUMS AND SONGS SHOULD BE SWITCHED, WILL REFACTOR!!!
 */
