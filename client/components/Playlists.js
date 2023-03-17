import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link, useParams, } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { fetchPlaylists} from '../store/allPlaylistStore'
import VotingComponent3 from './VotingComponent3'

function Playlists() {
  const dispatch = useDispatch()
  const history = useHistory();
  const [vote1, setVote1] = useState();
  const [vote2, setVote2] = useState();
  const [unlockVoting, setUnlockVoting] = useState();
  const [reload, setReload] = useState("1");
  const [createdBy, setCreatedBy] = useState();
  const playlists = useSelector((state) => state.allPlaylists )


  useEffect(() => {
    dispatch(fetchPlaylists())
    // Safe to add dispatch to the dependencies array
  }, [])

  const addToVote1 = (playlist) => {
    let result = playlist.songs.map(({ songName }) => songName)
    setVote1(result)
    console.log("VOTE2!", vote2)
  }

  const addToVote2 = (playlist) => {
    let result2 = playlist.songs.map(({ songName }) => songName)
    setVote2(result2)
    setUnlockVoting(1)
    console.log("VOTE1!", vote1)
  }


  return (
    <div>
      <div>
    <div>Playlists</div>

    {playlists ?   playlists.map((playlist) => {
      return (
        <div key={playlist.id}>
          <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
           <button onClick={() => addToVote1(playlist)}>Add to Vote1</button>
           <button onClick={() => addToVote2(playlist)}>Add to Vote2</button>
        </div>
      )
    }) : <div>NAN</div>}
    </div>
    {unlockVoting == 1 ? <div>
      <VotingComponent3  array1={vote1} array2={vote2} />
    </div>: <div>Check</div>}
    </div>
  )
}

export default Playlists
