\c songs_dev;


INSERT INTO artists (name, album, released) VALUES 
('Tems', 'For Broken Ears','2022'),
('Kendrick Lamar', 'Mr. Morale & The Big Steppers', '2202'),
('Future', 'I NEVER LIKED YOU', '2022'),
('Brent Faiyaz', 'Fuck The World', '2020'),
('Jay-z', 'Reasonable Doubt', '1996'),
('Micheal Jackson', 'Thriller', '1982'),
('lil Wayne', 'Tha Carter II','2005');

-- INSERT INTO albums (name, artist, released) VALUES
-- ()



INSERT INTO playlists (title, genre) VALUES
('Sleep meditation', 'relaxation'),
('Chill Mix', 'hip-hop'),
('Freaky playlist', 'R&B'),
('Dwayne Johnson iron Paradise Tour', 'workout'),
('Driving Mix', 'mix'),
('Playlist for Her', 'mix genre'),
('AfroBeats mix', 'mix');


INSERT INTO songs (name, artist, album, time, is_favorite, artists_id) VALUES
('Billy Jean', 'Micheal Jackson', 'Thriller', '4:55', true, 1),
('Get Money', 'Notorious BIG', 'Junior MAFIA', '4:34', true, 2),
('Free Mind', 'Tems ', 'For Broken Ears', '2:20', true, 3),
('Free', 'Carson', 'NO ', '1:55', false, 4),
('Dead Presidents', 'Jay-z', 'Reasonable Doubt', '4:26', true, 5),
('All I NEED', 'Popcaan', 'Fixtape', '2:58', true, 6),
('Count Me Out', 'kendrick Lamar', 'Mr. Morale & The Big Steppers', '4:43', true, 7),
('Clouded', 'Brent Faiyaz', 'Fuck The World', '1:50', true, 8),
('Exchange', 'Bryson Tiller', 'TRAPSOUL', '3:14', true, 9),
('Higher', 'Tems', 'For Broken Ears', '3:16', true, 10),
('WAIT FOR U', 'Future', 'I NEVER LIKED YOU', '3:09', true, 11),
('Damages', 'Tems', 'For Broken Ears', '2:49', true, 12),
('LOVE YOU BETTER', 'Future', 'I NEVER LIKED YOU', '2:09', true, 13),
('ALL DAY', 'Kanye WEST', 'single', '5:10', true, 14),
('City of Gods', 'Fivio Foreign', 'B.I.B.L.E', '4:16', true, 15),
('Otis', 'Jay-z Kanye West', 'Watch throne', '2:58', true, 16),
('understand', 'Omah Lay', 'Boy Alone', '2:54', true, 17),
('Rush', 'Ayra Starr', '19& Dangerous(DELUXE)', '3:05', true, 18),
('23', 'Skang', 'single', '2:24', true, 19),
('More Life', 'Burna Boy', 'OUTSIDE', '1:22', false, 20);
