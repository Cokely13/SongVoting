import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import PlaylistCreator from './PlaylistCreator';
import {fetchPlaylists} from '../store/allPlaylistStore'

const API_KEY = '6e56a81fd7f7f0fb08932517fef4fc86';
const API_URL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json&limit=100`;

const FetchSongs = (props) => {
  const playlists = useSelector((state) => state.allPlaylists )
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchTop100Songs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setSongs(response.data.tracks.track);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };



    fetchTop100Songs();
  }, []);

  useEffect(() => {
    dispatch(fetchPlaylists())
    // Safe to add dispatch to the dependencies array
  }, [])

  console.log("HERE WE GO", playlists)
  const thisPlaylist = playlists.filter((playlist)=> playlist.name == props.playListName)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // console.log("THIS ONE", thisPlaylist)

  return (

    <div>
    {/* <div>
      <h2>Top 100 Songs</h2>
      <ol>
        {songs.map((song, index) => (
          <li key={index}>
            {song.name} - {song.artist.name}
          </li>
        ))}
      </ol>
    </div> */}
    <PlaylistCreator songs={songs} thisPlaylist={thisPlaylist}/>
    </div>
  );
};

export default FetchSongs;
