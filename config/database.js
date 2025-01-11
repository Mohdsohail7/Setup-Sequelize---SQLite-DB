const sq = require('sequelize');

const sequelize = new sq.Sequelize({
  dialect: 'sqlite',
  storage: './database/database.sqlite',
});
module.exports = { DataTypes: sq.DataTypes, sequelize };
