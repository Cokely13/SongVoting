//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Song = require('./models/Song')
const Playlist = require('./models/Playlist')

//associations could go here!

Song.belongsTo(Playlist)
Playlist.hasMany(Song)

module.exports = {
  db,
  models: {
    User,
    Song,
    Playlist
  },
}
