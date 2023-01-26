\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('The crying Game', 'Nicki Minaj', 'The Pinkprint','4:25', true),
('If the world was ending', 'JP Saxe and Julia Micheaels', 'If the world was ending','3:59', true),
('Work', 'Rihanna', 'ANTI','3:39', false),
('Bolna Tui Bolna', 'Hridoy Khan', 'Bolna', '6:11', true);

INSERT INTO reviews (song_id, reviewer, title, content, rating )
VALUES
('1', 'Eva', 'My Favorite', 'Go to sad song', 3),
('2', 'Evan', 'hmmmm', 'It`s pretty depressing', 2),
('1', 'Riley', 'Least Favorite', 'She has has better songs', 1),
('2', 'Julia', 'I Love!', 'I finally learned how to properly fold a fitted sheet', 5),
('4', 'Henry', 'oldie', 'Bringd back so mant memories', 5),
('2', 'Arya', 'So Helpful', 'Hits the spot when im feeling down', 4),
('4', 'Cho', 'Interesting!','listening to other culture and their music, this one was pretty good!', 4),
('3', 'Tommy', 'WORKKKK', 'PUMPS ME Upppp, yesss queeennnnn!', 5),
('3', 'Peter', 'ARG!', 'Tired of it at this point.', 2);