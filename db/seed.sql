\c songs_dev;


INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Hit em up', 'Tupac', 'Death Row Greatest Hit','3:22', true), 
('Bikini Bottom', 'Ice Spice', 'Bikini Bottom', '1:47', true), 
('Sacrifice', 'The Weeknd', 'Dawn FM', '3:44', true);

INSERT INTO playlists (name, description, song_id)
VALUES
('Hype-Hop', 'Blazing Hip-Hop & R&B', 1),
('Gym Life', 'Top 40 Hottest songs for the gym', 2),
('2022', 'The best song of the year 2022', 3);


--run command: psql -U postgres -f db/seed.sql