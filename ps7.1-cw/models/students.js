const { sequelize, DataTypes } = require('../../config/database');
const Classroom = require('./classroom');

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  age: {
    type: DataTypes.INTEGER,
    defaultValue: 18,  // Set default age to 18 if none is provided
    allowNull: false
  },
  ClassroomId: { type: DataTypes.NUMBER }

});
// relationship between classromm and student using foreign key
Student.belongsTo(Classroom, { foreignKey: "ClassroomId"} );
Classroom.hasMany(Student, { foreignKey: "ClassroomId"})

module.exports = Student;
