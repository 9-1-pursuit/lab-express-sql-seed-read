\c songs_dev;

INSERT INTO playlists (name, description)
VALUES
('Happy', 'Fun upbeat vibes'),
('Chill', 'Relax and unwind' ),
('Boss Mode', 'Big energy');


INSERT INTO songs (name, artist, album, time, is_favorite, playlist_id) 
VALUES
('Shine','Doja Cat', 'Hot Pink', '2:40', true, 2),
('Coco Chanel', 'Nicki Minaj', 'Queen', '3:44', true, 1),
('Fruit Salad', 'Tierra Whack', 'Whack World', '1:00', true, 3),
('Zuu', 'Denzel Curry', 'Zuu', '2:06', true, 3 ),
('Automatic', 'Denzel Curry', 'Zuu', '3:03', true, 3),
('Callaita', 'Bad Bunny', 'Un Verano Sin Ti', '4:11', true, 1),
('Bagdad', 'Rosalia', 'El Mal Querer', '3:03', true,  2),
('Fog as a Bullet',  'The Marias', 'Cinema','2:57', true, 2),
('Just a Feeling', 'The Marias', 'Cinema','1:22', true, 2),
('Element', 'Kendrick Lamar', 'DAMN', '3:29', true, 3),
('King Kunta', 'Kendrick Lamar', 'To Pimp a Butterfly', '3:55', true, 1),
('Complexion', 'Kendrick Lamar', 'To Pimp a Butterfly', '4:23', true, 2 );

