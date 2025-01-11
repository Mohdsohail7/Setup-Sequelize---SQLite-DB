const sq = require('sequelize');

const sequelize = new sq.Sequelize({
  dialect: 'sqlite',
  storage: 'ps7.1-HW/database.sqlite',
});
module.exports = { DataTypes: sq.DataTypes, sequelize };
