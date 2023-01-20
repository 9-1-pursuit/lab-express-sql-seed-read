\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Human Nature', 'Michael Jackson', 'Thriller', '4:05', TRUE),
('I Try', 'Macy Gray', 'On How Life Is', '4:00', TRUE),
('Instanbul(Not Constantinople)', 'They Might Be Giants', 'Flood','2:34', FALSE),
('Get Ready for This', '2 Unlimited', 'Get Ready!', '3:41', FALSE),
('Call Me Irresponsible', 'Bobby Darin', 'Hello Dolly to Goodbye Charlie', '2:06', TRUE ),
('Fast Car', 'Tracy Chapman', 'Tracy Chapman', '4:57', TRUE);

INSERT INTO albums (album_name) VALUES
('Thriller'),
('On How Life Is'),
('They Might Be Giants'),
('Get Ready!'),
('Hello Dolly to Goodbye Charlie'),
('Tracy Chapman');
/* 
     -Run this code in terminal to add data to your database: 
    npm run dbseed
 */