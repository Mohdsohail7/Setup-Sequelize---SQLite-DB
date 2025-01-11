const { sequelize, DataTypes } = require('../../config/database');

const Book = sequelize.define('Book', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author: DataTypes.STRING,
  release_year: DataTypes.STRING
});

module.exports = Book;
