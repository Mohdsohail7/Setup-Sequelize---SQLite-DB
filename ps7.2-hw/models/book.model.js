const { sequelize, DataTypes } = require('../../config/database');

const Book = sequelize.define('Book', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Book;
