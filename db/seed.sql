\c songs_dev

INSERT INTO songs (
    name,
    artist,
    album,
    time,
    is_favorite
) VALUES (
    'Sunflower',
    'Post Malone',
    'Spider-Man: Into the Spider-Verse',
    '2018',
    'true'
),

('Payphone',
'Maroon 5',
'Overexposed',
'2012',
'true'),

('Humble',
'Kendrick Lamar',
'DAMN',
'2017',
'true'),

('Oroborus',
'Gojira',
'The Way of All Flesh',
'2008',
'false');


INSERT INTO reviews (song_id, reviewer, content, rating )
VALUES
(1, 'Evan', 'My Favorite', 3),
(3, 'Gabi', 'Best song', 5);

