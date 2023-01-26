\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES

('Needed Me', 'Rihanna', 'Anti','3.12', true),
('Blind', 'SZA', 'SOS','2.30', true),
('Body', 'Summer Walker', 'Over it','3.14', true),
('Tonight', 'Summer Walker', 'Over it','2.57', false),
('Just Might', 'Summer Walker', 'Over it','3.26', true);


INSERT INTO albums (songs_id, name, artist, release, length, genre, label)
 VALUES
('1', 'Anti', 'Rhianna', 'January.28th.2016', '43.36','HipHop', 'Roc Nation' ),
('2','SOS', 'SZA', 'December.9th.2022', '67.51','R&B', 'Top Dwag Entertainment/RCA Records' ),
('3','Over it', 'Summer Walker', 'October.4th.2019', '42.49', 'R&B', 'Interscope');