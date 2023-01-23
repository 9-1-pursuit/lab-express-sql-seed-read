\c tuner;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Can You Feel My Heart', 'Bring Me The Horizon', 'Sempiternal', '3:48', true),
('Body Language', 'Jesse McCartney ft. T-Pain', 'Jesse McCartney ft. T-Pain', '3:40', true),
('Woman', 'Doja Cat', 'Planet Her', '3:13', false);

INSERT INTO playlist (song_id, title) VALUES
('1', 'Workout playlist' )