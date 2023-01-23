\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) 
VALUES
('Shine','Doja Cat', 'Hot Pink', '2:40', true),
('Coco Chanel', 'Nicki Minaj', 'Queen', '3:44', true),
('Fruit Salad', 'Tierra Whack', 'Whack World', '1:00', true),
('Zuu', 'Denzel Curry', 'Zuu', '2:06', true ),
('Automatic', 'Denzel Curry', 'Zuu', '3:03', true),
('Callaita', 'Bad Bunny', 'Un Verano Sin Ti', '4:11', true),
('Bagdad', 'Rosalia', 'El Mal Querer', '3:03', true ),
('Fog as a Bullet',  'The Marias', 'Cinema','2:57', true),
('Just a Feeling', 'The Marias', 'Cinema','1:22', true),
('Element', 'Kendrick Lamar', 'DAMN', '3:29', true),
('King Kunta', 'Kendrick Lamar', 'To Pimp a Butterfly', '3:55', true),
('Complexion', 'Kendrick Lamar', 'To Pimp a Butterfly', '4:23', true )
;

INSERT INTO playlists (name, description, song_id)
VALUES
('Happy', 'Fun upbeat vibes', 2),
('Chill', 'Relax and unwind', 9),
('Happy', 'Fun upbeat vibes', 4),
('Happy', 'Fun upbeat vibes', 5),
('Chill', 'Relax and unwind', 8),
('Boss Mode', 'Big energy', 4),
('Boss Mode', 'Big energy', 10),
('Boss Mode', 'Big energy', 11);