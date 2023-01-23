\c songs_dev;

INSERT INTO playlists (creator, title, details, rating) VALUES ('Dan', 'Dream Trance', 'A collection of trance tunes', 4),
('Andrea Ribeca', 'Best of Nu NRG', 'Some of the best tunes of Nu NRG', 5),
('Ciro', 'Vandit legend Paul Van Dyk', 'PVD''s best tunes', 4);

INSERT INTO songs (name, artist, album, time, is_favorite, playlist_id) VALUES ('Oasis', 'Y.O.M.C.', '', '10:27', true, 1 ), ('Butterfly', 'Nu NRG', 'Freefall', '4:53', true, 2), ('Dreamland', 'Nu NRG', 'Freefall', '4:18', true, 2),
('Duality', 'Paul Van Dyk', 'Guiding Light', '5:46', true, 3),
('Lights', 'Paul Van Dyk', 'The Politics of Dancing 3', '6:20', true, 3);
