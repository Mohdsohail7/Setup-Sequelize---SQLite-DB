const { sequelize, DataTypes } = require('../../config/database');

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
    defaultValue: 18,  // Set default age to 18 if none is provided
  },
});
module.exports = Student;
