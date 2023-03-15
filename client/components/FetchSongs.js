import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'YOUR_LAST_FM_API_KEY';
const API_URL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json&limit=100`;

const FetchSongs = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Top 100 Songs</h2>
      <ol>
        {songs.map((song, index) => (
          <li key={index}>
            {song.name} - {song.artist.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FetchSongs;
