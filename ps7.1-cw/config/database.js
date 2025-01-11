const sq = require('sequelize');

const sequelize = new sq.Sequelize({
  dialect: 'sqlite',
  storage: 'database/students_database.sqlite',
});
module.exports = { DataTypes: sq.DataTypes, sequelize };
