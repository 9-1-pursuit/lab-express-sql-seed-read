\c songs_dev;


INSERT INTO albums (album_name, album_artist, released, units_sold) VALUES
('Thriller', 'Michael Jackson', 1982, 70000000),
('On How Life Is', 'Macy Gray', 1999, 7000000),
('Flood', 'They Might Be Giants', 1990, 1100000),
('Get Ready!', '2 Unlimited', 1992, 544000),
('Hello Dolly to Goodbye Charlie', 'Bobby Darin', 1964, null),
('Tracy Chapman', 'Tracy Chapman', 1988, 20000000);


INSERT INTO songs (name, artist, album, time, is_favorite, album_id) VALUES
('Human Nature', 'Michael Jackson', 'Thriller', '4:05', TRUE, 1),
('I Try', 'Macy Gray', 'On How Life Is', '4:00', TRUE, 2),
('Instanbul(Not Constantinople)', 'They Might Be Giants', 'Flood','2:34', FALSE, 3),
('Get Ready for This', '2 Unlimited', 'Get Ready!', '3:41', FALSE, 4),
('Call Me Irresponsible', 'Bobby Darin', 'Hello Dolly to Goodbye Charlie', '2:06', TRUE, 5 ),
('Fast Car', 'Tracy Chapman', 'Tracy Chapman', '4:57', TRUE, 6);

INSERT INTO playlists (playlist_name, song_id) VALUES
('Chill', 2 ),
('Chill', 6),
('Chill', 1);
/* 
     -Run this code in terminal to add data to your database: 
    npm run dbseed
 */