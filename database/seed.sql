\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Human Nature', 'Michael Jackson', 'Thriller', '4:05', TRUE),
('I Try', 'Macy Gray', 'On How Life Is', '4:00', TRUE),
('Instanbul(Not Constantinople)', 'They Might Be Giants', 'Flood','2:34', FALSE),
('Get Ready for This', '2 Unlimited', 'Get Ready!', '3:41', FALSE),
('Call Me Irresponsible', 'Bobby Darin', 'Hello Dolly to Goodbye Charlie', '2:06', TRUE );

/* 
     -Run this code in terminal to add data to your database: 
    psql -U postgres -f database/seed.sql
 */