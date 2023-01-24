\c songs_dev



-- ALBUMS 
INSERT INTO albums (title, released_year, length, genre) VALUES ('The Last Hope', '2019', '7:46', 'Hip-Hop/Rap'),
('Twin Fantasy', '2018', '71', 'Alternative/Indie'),
('Yes Future', '2018', '86', 'Dance/Electronic');




INSERT INTO songs (album_id, name, artist, album, time, is_favorite) VALUES
('2','Cute Thing', 'Car Seat Headrest','Twin Fantasy', '6:46', true), 
('1','Better Tomorrows', 'B.Winters','The Last Hope', '3:15', true),
('1','Ibreak', 'B.Winters','The Last Hope', '2:01', true),
('1','Dear Lord', 'B.Winters','The Last Hope', '2:29', False),
('3','Getting Started', 'The Toxic Avengers','Yes Future', '5:58', true);
-- ('Purple Eyes', 'The Toxic Avengers','Globe, vol 1', '4:45', false),
-- ('(Nothing But) Flowers', 'Talking Heads', 'Remain in Light', '6:28', false),
-- ('Books about UFOs','Hüsker Dü','New Day Rising','2:49', True),
-- ('We Got the World','Icona Pop','This is...','3:17', false),
-- ('Fame','David Bowie', 'Young Americans','4:10', true);