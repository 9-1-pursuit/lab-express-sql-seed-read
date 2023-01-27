-- Connect to database created in schema
\c songs_dev

-- Insert seed data
INSERT INTO songs 
(name, artist, album, time, is_Favorite)
VALUES
('you''ve changed, i''ve changed', 'San Holo', 'bb u ok?', '5:11', true),
('Promise (feat. LiL Lotus)', 'Tisoki, LiL Lotus', 'Promise (feat. LiL Lotus)', '2:36', true),
('Quevedo: Bzrp Music Sessions, Vol. 52', 'Bizarrap, Quevedo', 'Quevedo: Bzrp Music Sessions, Vol. 52', '3:18', true);