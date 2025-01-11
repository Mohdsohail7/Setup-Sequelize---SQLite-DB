const { sequelize, DataTypes } = require('../../config/database');

const Movie = sequelize.define('Movie', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Movie;
