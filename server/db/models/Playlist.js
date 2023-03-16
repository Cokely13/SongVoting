const Sequelize = require('sequelize')
const db = require('../db')


const Playlist = db.define('playlist', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    createdBy: {
      type: Sequelize.INTEGER,
  },

})


module.exports = Playlist
