//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Song = require('./models/Song')
const Vote = require('./models/Vote')
const Playlist = require('./models/Playlist')

//associations could go here!

Playlist.hasMany(Song, {
  foreignKey: 'playlistId',
  as: 'songs', // name of the association
});

Song.belongsTo(Playlist, {
  foreignKey: 'playlistId',
  as: 'playlist',
});

Song.belongsToMany(Song, {
  as: 'versus', // name of the association
  through: Vote, // the join table
  foreignKey: 'songId', // foreign key in the Vote model that references the Song model
  otherKey: 'versusSongId', // foreign key in the Vote model that references the other Song model
});

Song.hasMany(Vote, {
  foreignKey: 'songId',
  as: 'songVotes', // name of the association
});

// Vote model definition
// const Vote = sequelize.define('Vote', {});

// set up the associations
Vote.belongsTo(Song, {
  foreignKey: 'songId',
  as: 'song',
});

Vote.belongsTo(Song, {
  foreignKey: 'versusSongId',
  as: 'versusSong',
});

module.exports = {
  db,
  models: {
    User,
    Song,
    Playlist,
    Vote
  },
}
