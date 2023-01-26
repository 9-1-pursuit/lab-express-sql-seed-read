DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

-- one album can have many songs
-- song_id INT NOT NULL REFERENCES songs (id) ON DELETE CASCADE 
CREATE TABLE albums (
    id serial PRIMARY KEY,
    album_artist TEXT,
    released INT,
    units_sold INT,
    album_name TEXT NOT NULL
);

-- songs belong to one album
-- album_id INT NOT NULL REFERENCES albums (id) ON DELETE CASCADE 
CREATE TABLE songs (
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT DEFAULT 'Unknown',
    time TEXT DEFAULT 'Unknown',
    is_favorite BOOL,
    album_id INT NOT NULL,
    CONSTRAINT fk_songs_album_id
    FOREIGN KEY (album_id) REFERENCES albums(id) ON DELETE CASCADE
);

-- one playlist can have many songs

CREATE TABLE playlists (
    id serial PRIMARY KEY,
    playlist_name TEXT NOT NULL,
    song_id INT,
    FOREIGN KEY (song_id) REFERENCES songs (id) ON DELETE CASCADE
)
/* 
     - Run this code in terminal to run schema file :
    npm run dbinit
 */
