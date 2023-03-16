import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link, useParams, } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import {createPlaylist} from '../store/allPlaylistStore'
// import {createShow} from '../store/allShowsStore'
// // import { fetchUsers } from '../store/allUsersStore'
// import { fetchSingleUser } from '../store/singleUserStore'

export default function CreatePlaylist() {
  const dispatch = useDispatch()
  const [name, setName] = useState();
  const [reload, setReload] = useState(1);
  const [createdBy, setCreatedBy] = useState();
  const [channel, setChannel] = useState();
  const [image, setImage] = useState();
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
    setName("")
  }


  return (
    <div >
    <form>
        <div>
        <label> <h2 htmlFor="name" style={{marginRight: "10px"}}>Playlist Name: </h2></label>
          <input name='name' onChange={handleChange}  type="text" placeholder="Name"/>
        </div>
    </form>
    <div className="text-center">
    <button className="btn btn-primary text-center"  onClick={handleClick}>Create Playlist</button>
    </div>
  </div>
  )
}
