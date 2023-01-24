\c seed_dev;

INSERT INTO seed (name, artist, album, time, is_favorite) VALUES
('example song', 'example artist', 'example album', '1:11', true);

INSERT INTO albums (song_id, title, artist, is_favorite) VALUES
('1', 'example album', 'example artist', true);