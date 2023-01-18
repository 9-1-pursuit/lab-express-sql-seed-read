DROP DATABASE IF EXISTS seed_dev;
CREATE DATABASE seed_dev;

\c seed_dev;

CREATE TABLE seed (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);
