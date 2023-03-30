import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchPlaylist } from '../store/singlePlaylistStore'
import { useParams } from 'react-router-dom'
// import { updateSingleShow } from '../store/singleShowStore'
// import { deleteShow } from '../store/allShowsStore'
// import { fetchSingleUser } from '../store/singleUserStore'

function PlaylistDetail() {
  const dispatch = useDispatch()
  const { playlistId } = useParams();
  const playlist = useSelector((state) => state.singlePlaylist)

  useEffect(() => {
    dispatch(fetchPlaylist(playlistId))
    // Safe to add dispatch to the dependencies array
  }, [])

  console.log("playlist", playlist)

  return (
    <div>
    <div>Name : {playlist.name}</div>
    <div>Wins: {playlist.wins}</div>
    <div>Loss: {playlist.losses}</div>
    <div><u>Songs</u></div>
    {playlist.songs ?   playlist.songs.map((song) => {
      return (
        <div key={song.id}>
          <div>{song.songName} by {song.artist}</div>
        </div>
      )
    }) : <div>NAN</div>}
    </div>
  )
}

export default PlaylistDetail
