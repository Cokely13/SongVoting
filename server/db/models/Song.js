const Sequelize = require('sequelize')
const db = require('../db')


const Song = db.define('song', {
    songName: {
        type: Sequelize.STRING,
    },
    artist: {
      type: Sequelize.STRING,
  },

})


module.exports = Song
