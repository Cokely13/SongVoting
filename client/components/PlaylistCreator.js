
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createSong } from '../store/allSongsStore';




const PlaylistCreator = (props) => {
  const dispatch = useDispatch()
  const allSongs = props.songs
  const currentPlayList = props.thisPlaylist
  console.log("PROPS", allSongs)
  console.log("P!!!", currentPlayList)

  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (song) => {
    if (!playlist.includes(song)) {
      const newSong = {
        songName: song.name,
        artist: song.artist.name,
        playlistId: currentPlayList[0].id
      }
    console.log("test", newSong)
      dispatch(createSong(newSong))
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
          {allSongs.map((song, index) => (
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
