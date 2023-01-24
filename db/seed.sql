\c songs_dev

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Cute Thing', 'Car Seat Headrest','Twin Fantasy', '6:46', true), 
('Better Tomorrows', 'B.Winters','The Last Hope', '3:15', true),
('Ibreak', 'B.Winters','The Last Hope', '2:01', true),
('Dear Lord', 'B.Winters','The Last Hope', '2:29', False),
('Getting Started', 'The Toxic Avengers','Yes Future', '5:58', true),
('Purple Eyes', 'The Toxic Avengers','Globe, vol 1', '4:45', false),
('(Nothing But) Flowers', 'Talking Heads', 'Remain in Light', '6:28', false),
('Books about UFOs','Hüsker Dü','New Day Rising','2:49', True),
('We Got the World','Icona Pop','This is...','3:17', false),
('Fame','David Bowie', 'Young Americans','4:10', true);

-- ALBUMS 
INSERT INTO albums (song_id, title, released_year, length, genre) VALUES ('3', 'The Last Hope', '2019', '7:46', 'Hip-Hop/Rap'),
('1', 'Twin Fantasy', '2018', '71', 'Alternative/Indie'),
('5', 'Yes Future', '2018', '86', 'Dance/Electronic');