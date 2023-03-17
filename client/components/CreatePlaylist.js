import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link, useParams, } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import {createPlaylist, fetchPlaylists} from '../store/allPlaylistStore'
import FetchSongs from './FetchSongs'
// import {createShow} from '../store/allShowsStore'
// // import { fetchUsers } from '../store/allUsersStore'
// import { fetchSingleUser } from '../store/singleUserStore'

export default function CreatePlaylist() {
  const dispatch = useDispatch()
  const history = useHistory();
  const [name, setName] = useState();
  const [reload, setReload] = useState("1");
  const [createdBy, setCreatedBy] = useState();
  const {id} = useSelector((state) => state.auth )


  const handleChange = (event) => {
    event.preventDefault()
    setName(event.target.value)
    setCreatedBy(id)
  }


  const handleClick = (e) => {
    e.preventDefault()
    const newPlaylist = {
      name: name,
      createdBy: createdBy,
    }

    dispatch(createPlaylist(newPlaylist))
    // history.push(`/home`)
    setReload("2")
    dispatch(fetchPlaylists())
    // console.log("playlist", playlists)
  }


  return (
    <div >
    {reload == 1 ?<div> <form>
        <div>
        <label> <h2 htmlFor="name" style={{marginRight: "10px"}}>Playlist Name: </h2></label>
          <input name='name' onChange={handleChange}  type="text" placeholder="Name"/>
        </div>
    </form>
    <div className="text-center">
    <button className="btn btn-primary text-center"  onClick={handleClick}>Create Playlist</button>
    </div></div> : <div></div>}
    {reload == 2 ? <div><FetchSongs playListName={name} /></div> : <div></div>}
  </div>
  )
}
