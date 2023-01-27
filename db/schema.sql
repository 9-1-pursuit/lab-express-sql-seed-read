DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;
\c songs_dev

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    album TEXT NOT NULL,
    released TEXT 
);

CREATE TABLE ablums (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    released TEXT
);


-- playlist one to many songs table 
CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    genre TEXT NOT NULL
);

-- added artists and playlists id to songs table
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN,
    artists_id INTEGER REFERENCES artists (id) ON DELETE CASCADE
    albums_id INTEGER REFERENCES albums (id) ON DELETE CASCADE
    playlists_id INTEGER REFERENCES playlists (id) ON DELETE CASCADE

);

INSERT INTO reviews (songs_id, reviewer, title, content, rating )
VALUES
('1', 'Nick', 'My Favorite', 'This website crushes it when it comes to awesome explanations', 3),
('2', 'James', 'My Favorite', 'This website crushes it when it comes to inspiring me', 3),
('3', 'Tisha', 'My Least Favorite', 'This website crushes it when it comes to destroying my patience', 5),
('2', 'Juliana', 'I Love Going Here', 'I finally learned how to properly fold a fitted sheet', 5),
('2', 'Dave', 'Cool Site', 'But I got way into adding decorative pillows everywhere', 1),
('2', 'Mr. Cool', 'So Helpful', 'I got some awesome recommendations for a ceiling fan and some spoons', 3),
('2', 'Alison', 'A lifesaver!','Helped me get my stove cleaner than I ever imagiend possible!', 4),
('3', 'Hannah', 'Insert Confetti Emoji Here', 'I survived 6 hours at the DMV!', 4),
('3', 'Gabi', 'My Friend Hannah', 'Gets a discount if I leave a positive review, so here it is', 5);
-- will figure out how to use these later
    -- playlist_id INTEGER REFERENCES playlist (id) ON DELETE CASCADE
    -- album_id INTEGER REFERENCES album (id) ON DELETE CASCADE
-- will figure out how to do all album and artist table when i get the time.