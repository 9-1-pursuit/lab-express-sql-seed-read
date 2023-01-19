CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
 name TEXT NOT NULL,
 artist TEXT,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);