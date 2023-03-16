import React, { useState } from 'react';


const MOCK_SONGS = [
  // Replace this mock data with real data from an API
  { id: 1, title: 'Song 1', artist: 'Artist 1' },
  { id: 2, title: 'Song 2', artist: 'Artist 2' },
  { id: 3, title: 'Song 3', artist: 'Artist 3' },
  // ...
];

const PlaylistCreator = (props) => {
  const playListSongs = props.songs
  console.log("PROPS", playListSongs)
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (song) => {
    if (!playlist.includes(song)) {
      setPlaylist([...playlist, song]);
    }
  };

  const removeFromPlaylist = (song) => {
    setPlaylist(playlist.filter((s) => s !== song));
  };

  return (
    <div>
      <h2>Create your playlist:</h2>
      <div>
        <h3>All songs:</h3>
        <ul>
          {playListSongs.map((song, index) => (
            <li key={index}>
              {song.name} - {song.artist.name}
              <button onClick={() => addToPlaylist(song)}>Add to playlist</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Your playlist:</h3>
        <ul>
          {playlist.map((song, index) => (
            <li key={index}>
              {song.name} - {song.artist.name}
              <button onClick={() => removeFromPlaylist(song)}>Remove from playlist</button>
            </li>
          ))}
        </ul>
        <button>Create Playlist</button>
      </div>
    </div>
  );
};

export default PlaylistCreator;
