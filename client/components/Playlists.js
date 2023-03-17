import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link, useParams, } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { fetchPlaylists} from '../store/allPlaylistStore'

function Playlists() {
  const dispatch = useDispatch()
  const history = useHistory();
  const [name, setName] = useState();
  const [reload, setReload] = useState("1");
  const [createdBy, setCreatedBy] = useState();
  const playlists = useSelector((state) => state.allPlaylists )

  useEffect(() => {
    dispatch(fetchPlaylists())
    // Safe to add dispatch to the dependencies array
  }, [])


  return (
    <div>
    <div>Playlists</div>
    {playlists.map((playlist) => {
      return (
        <div key={playlist.id}>
          {playlists.name}
        </div>
      )
    })}
    </div>
  )
}

export default Playlists
