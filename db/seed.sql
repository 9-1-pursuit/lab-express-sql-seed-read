\c seed_dev;

INSERT INTO albums ( title, artist, is_favorite) VALUES
('example album', 'example artist', true);

INSERT INTO songs (name, artist, album, time, is_favorite, albums_id) VALUES
('example song', 'example artist', 'example album', '1:11', true, 1);
