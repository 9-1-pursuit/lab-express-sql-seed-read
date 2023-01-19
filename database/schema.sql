DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT DEFAULT 'Unknown',
    time TEXT DEFAULT 'Unknown',
    is_favorite BOOL DEFAULT FALSE
)

/* 
     - Run this code in terminal to run schema file :
    npm run dbinit
 */
