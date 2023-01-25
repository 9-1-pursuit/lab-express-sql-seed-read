\c songs_dev;

INSERT INTO playlist (name, description, is_favorite) VALUES
('Anime Music', 'Music from anime series', true),
('Video Game Music', 'Music from Games', true),
('Vibe', 'Chill Music', true);


INSERT INTO songs ( playlist_id, name, album, time, is_favorite ) VALUES
('1', 'New Genesis', 'One Piece Film: Red', '2022', true),
('2', 'Everyday is Night', 'Valhalla', '2017', true),
('3', 'We Are Finally Landing','Before the Night', '2016', true);
