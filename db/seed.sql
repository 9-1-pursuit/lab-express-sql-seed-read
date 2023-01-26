\c songs_dev;

INSERT INTO playlists (name, creator) VALUES 
('Foreign', 'Romeo'),
('Old School Rap', 'Emalee'),
('Hip Hop', 'Daniel');

INSERT INTO songs (name, artist, album, time, is_favorite, playlist_id) VALUES 
('247', 'Mike Dimes', '247', '2:43', false, '3'),
('Bikini Bottom', 'Ice Spice', 'Bikini Bottom', '1:47', true, '3'),
('Bruxelles je t`aime', 'Angele', 'Nonante-Cinq', '3:48', true, '1'),
('LVL', 'A$AP ROCKY', 'LONG.LIVE.A$AP', '3:40', true, '3'),
('Dont Dont DO It!', 'N.E.R.D', 'NO ONE EVER REALLY DIES', '4:17', true, '3'),
('Caramelo Duro', 'Miguel', 'War & Leisure', '4:18', false, '1'),
('Electric Feel', 'MGMT', 'Oracular Spectacular', '3:50', true, '3'),
('Frontin', 'Pharrel Williams', 'The Neptunes Present... Clones', '3:57', true, '2'),
('Many Men', '50 Cent', 'Get Rich Or Die Tryin', '4:16', true, '2'),
('Intl Players Anthem', 'UGK', 'The Essential UGK', '4:19', true, '2'),
('5200', 'ScHoolboy Q', 'CrasH Talk', '3:32', false, '3'),
('Molasses', 'Earl Sweatshirt','Doris', '2:16', true, '3'),
('You Said', 'Young Thug', 'Beautiful Thugger Girls', '6:42', true, '3'),
('Fancy', 'Drake','Thank Me Later', '5:19', true, '3'),
('Backend', 'Don Toliver', 'Donny Womack', '3:51', true, '3'),
('Flamingo', 'Kero Kero Bonito', 'Flamingo', '3:18', false, '3'),
('hooligan', 'Baby Keem', 'hooligan/sons & critics', '2:37', true, '3'),
('Roots', 'Amine', 'Limbo', '4:27', true, '3'),
('Vuelve Con Tu Papa', 'Teodoro Reyes', 'Sentimiento', '3:13', false, '1'),
('12.38', 'Childish Gambino', '3.15.20', '6:32', true, '3'),
('Stars', 'JID', 'The Forever Story', '4:18', true, '3'),
('Gidget', 'Free Nationals', 'Free Nationals', '3:39', true, '3');
