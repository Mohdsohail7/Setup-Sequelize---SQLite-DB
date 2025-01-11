const { sequelize, DataTypes } = require('../config/database.js');

const Book = sequelize.define('Book', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Book;
