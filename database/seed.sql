\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Human Nature', 'Michael Jackson', 'Thriller', '4:05', TRUE),
('I Try', 'Macy Gray', 'On How Life Is', '4:00', TRUE),
('Instanbul(Not Constantinople)', 'They Might Be Giants', 'Flood','2:34', FALSE),
('Get Ready for This', '2 Unlimited', 'Get Ready!', '3:41', FALSE),
('Call Me Irresponsible', 'Bobby Darin', 'Hello Dolly to Goodbye Charlie', '2:06', TRUE ),
('Fast Car', 'Tracy Chapman', 'Tracy Chapman', '4:57', TRUE);

INSERT INTO albums (album_name, album_artist, released, units_sold ) VALUES
('Thriller', 'Michael Jackson', 1982, 70,000,000),
('On How Life Is', 'Macy Gray', 1999, 7,000,000),
('Flood', 'They Might Be Giants', 1990, 1,100,000),
('Get Ready!', '2 Unlimited', 1992, 544,000),
('Hello Dolly to Goodbye Charlie', 'Bobby Darin', 1964, 'Unknown'),
('Tracy Chapman', 'Tracy Chapman', 1988, 20,000,000);
/* 
     -Run this code in terminal to add data to your database: 
    npm run dbseed
 */