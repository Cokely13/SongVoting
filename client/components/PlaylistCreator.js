import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createSong } from '../store/allSongsStore';
import { Link } from 'react-router-dom';
import './playlistCreator.css'; // Import the stylesheet

const PlaylistCreator = (props) => {
  const dispatch = useDispatch()
  const allSongs = props.songs
  const currentPlayList = props.thisPlaylist

  console.log("all", allSongs)

  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (song) => {
    if (!playlist.includes(song)) {
      const newSong = {
        songName: song.name,
        artist: song.artist.name,
        playlistId: currentPlayList[0].id
      }
      dispatch(createSong(newSong))
      setPlaylist([...playlist, song]);
    }
  };

  const removeFromPlaylist = (song) => {
    setPlaylist(playlist.filter((s) => s !== song));
  };

  return (
    <div className="playlist-creator-container">
      <h2>Create your playlist:</h2>
      <div className="playlist-creator-section">
        <h3 className="playlist-creator-section-title">All songs:</h3>
        <div className="playlist-creator-list-container">
          <ul className="playlist-creator-list">
            {allSongs.map((song, index) => (
              <li key={index}>
                {song.name} - {song.artist.name}
                <button className="playlist-creator-button" onClick={() => addToPlaylist(song)}>Add to playlist</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="playlist-creator-section">
        <h3 className="playlist-creator-section-title">Your playlist:</h3>
        <div className="playlist-creator-list-container">
          <ul className="playlist-creator-list">
            {playlist.map((song, index) => (
              <li key={index}>
                {song.name} - {song.artist.name}
                <button className="playlist-creator-button" onClick={() => removeFromPlaylist(song)}>Remove from playlist</button>
              </li>
            ))}
          </ul>
        </div>
        <button className="playlist-creator-finish-button" ><Link to={'/home'}>Finish Playlist</Link></button>
      </div>
    </div>
  );

};

export default PlaylistCreator;

