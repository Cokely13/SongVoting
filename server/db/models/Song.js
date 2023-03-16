const Sequelize = require('sequelize')
const db = require('../db')


const Song = db.define('song', {
    songName: {
        type: Sequelize.STRING,
    },
    artist: {
      type: Sequelize.STRING,
  },
  playlistId: {
    type: Sequelize.INTEGER,
},

})


module.exports = Song
