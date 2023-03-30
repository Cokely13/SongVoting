import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { fetchPlaylists} from '../store/allPlaylistStore';
import VotingComponent3 from './VotingComponent3';
import PlaylistComparison from './PlaylistComparison';
import './Playlists.css'; // import the stylesheet

function Playlists() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [vote1, setVote1] = useState();
  const [vote2, setVote2] = useState();
  const [voting, setVoting] = useState();
  const [unlockVoting, setUnlockVoting] = useState();
  const [reload, setReload] = useState("1");
  const [createdBy, setCreatedBy] = useState();
  const playlists = useSelector((state) => state.allPlaylists )

  useEffect(() => {
    dispatch(fetchPlaylists())
  }, [])

  const addToVote1 = (playlist) => {
    let result = playlist.songs.map(({ songName }) => songName)
    setVote1(playlist)
  }

  const addToVote2 = (playlist) => {
    let result2 = playlist.songs.map(({ songName }) => songName)
    setVote2(playlist)
    setUnlockVoting(1)
  }

  const handleVote = (event) => {
    setVoting(1)
  }

  return (
    <div className="playlists-container"> {/* Add a container for the component */}
      {voting !== 1 ?
      <div className="playlists-wrapper"> {/* Add a wrapper for the playlists */}
        <div className="playlists-header">Playlists</div>
        {playlists ? playlists.map((playlist) => {
          return (
            <div key={playlist.id} className="playlist-item">
              <Link to={`/playlists/${playlist.id}`} className="playlist-name">{playlist.name}</Link>
              <div className="playlist-stats">
                <span>Wins: {playlist.wins}</span>
                <span>Losses: {playlist.losses}</span>
              </div>
              {vote1 !== playlist ? <button onClick={() => addToVote1(playlist)} className="add-to-vote-button">Add to Vote1</button> : <div></div>}
              {(vote1 && !vote2) || vote1 == playlist ? <button onClick={() => addToVote2(playlist)} className="add-to-vote-button">Add to Vote2</button>: <div></div>}
            </div>
          )
        }) : <div>NAN</div>}
        {vote1 && vote2 ?
        <div className="voting-details">
          Playlist 1: {vote1.name} vs Playlist2: {vote2.name}
        </div> : <div></div>}
        {vote1 && vote2 ? <button onClick={handleVote} className="lets-vote-button">LET'S VOTE</button> :<div></div>}
      </div> : <div></div>}
      {voting == 1 ? <div>
        <PlaylistComparison playlist1={vote1} playlist2={vote2} />
      </div>: <div></div>}
    </div>
  )
}

export default Playlists;
