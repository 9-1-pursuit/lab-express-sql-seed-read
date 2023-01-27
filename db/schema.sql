-- Create and connect to database
DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev

-- Create table for data
CREATE table songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album VARCHAR(50),
    time VARCHAR(20),
    is_favorite BOOLEAN
);

