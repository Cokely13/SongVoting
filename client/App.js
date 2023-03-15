import React from 'react'
import SongVoting from './components/SongVoting';
import Navbar from './components/Navbar'
import Routes from './Routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <h1>Song Voting</h1>
      <SongVoting songA="Song A Title" songB="Song B Title" />
    </div>
  )
}

export default App
