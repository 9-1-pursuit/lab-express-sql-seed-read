\c tuner_songs;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Bad Blood', 'Stormzy', 'This Is What I Meant','3:35', true),
('I Know', 'Jay-Z', 'The Black Album','4:35', true),
('The Genesis', 'NAS', 'Illmatic','2:30', false),
('Both', 'Headie One', 'Music X Road','3:25', true),
('Jimmy Crooks', 'Drake & 21 Savage', 'Honestly Nevermin','4:20', true),
('Yes Indeed', 'Drake, Lil Baby, Gunna', 'Drip or Drown','4:00', true);

INSERT INTO artists (song_id, name, genre, label, listens_per_week) VALUES
('1', 'Stormzy', 'Hip-Hop/ UK Rap', 'Def Jam Uk', 20),
('2', 'Jay-Z', 'Hip-Hop/Rap', 'Roc-A-Fella', 200),
('3', 'NAS', 'Hip-Hop/Rap', 'Columbia Records', 2),
('4', 'Headie One', 'Hip-Hop/ UK Rap', 'Def Jam Uk', 16),
('5', 'Drake', 'Hip-Hop/Rap', 'OVO Records', 160),
('5', '21 Savage', 'Hip-Hop/Rap', 'Epic Records', 160),
('6', 'Lil Baby', 'Hip-Hop/Rap', 'Motown Records', 128),
('6', 'Gunna', 'Hip-Hop/Rap', '300 Records', 128),
('6', 'Drake', 'Hip-Hop/Rap', 'OVO Records', 128);