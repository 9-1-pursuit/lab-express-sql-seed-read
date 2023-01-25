\c tuner;

INSERT INTO playlists (title) VALUES ('gym'), ('car'), ('work');

INSERT INTO songs (playlist_id, name, artist, album, time, is_favorite) VALUES
('1', 'Can You Feel My Heart', 'Bring Me The Horizon', 'Sempiternal', '3:48', true),
('2','Body Language', 'Jesse McCartney ft. T-Pain', 'Jesse McCartney ft. T-Pain', '3:40', true),
('3', 'Woman', 'Doja Cat', 'Planet Her', '3:13', false);

INSERT INTO comments (songs_id, commenter, title, content)
VALUES
('1', 'Evan', 'My Favorite', 'This song crushes it when it comes to awesome lyrics'),
('2', 'Evan', 'My Favorite', 'This song crushes it when it comes to sick beats'),
('3', 'Evan', 'My Least Favorite', 'This song sucks'),
('2', 'Juliana', 'I Love Listening to this', 'I finally found the perfect song'),
('2', 'David', 'Cool Song', 'I got way into dancing to this song'),
('2', 'Mr. Mingo', 'So Beautiful', 'I love the beautiful lyricism and beat'),
('2', 'Alison', 'A lifesaver!','Helped me get through a hard time!'),
('3', 'Hannah', 'Insert Heart Emoji Here', 'I LOVE THIS SONG!');