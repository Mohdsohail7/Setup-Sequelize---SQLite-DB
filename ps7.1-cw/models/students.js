const { sequelize, DataTypes } = require('../config/database.js');

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Student;
