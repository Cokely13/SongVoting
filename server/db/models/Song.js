const Sequelize = require('sequelize')
const db = require('../db')


const Song = db.define('Song', {
    songName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    votes: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    totalVotes: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });


module.exports = Song
