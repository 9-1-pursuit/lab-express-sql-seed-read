DROP DATABASE IF EXISTS bookmarks_dev;
CREATE DATABASE bookmarks_dev;

\c tuner_songs;

CREATE TABLE songs (
 name TEXT NOT NULL,
 artist TEXT,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);