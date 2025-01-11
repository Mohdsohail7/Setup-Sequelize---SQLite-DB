const { sequelize, DataTypes } = require("../../config/database");
const Teacher = require("./teacher");

const Classroom = sequelize.define("Classroom", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    teacherId: {
        type: DataTypes.NUMBER,
        allowNull: false,
    }
});

Classroom.belongsTo(Teacher, { foreignKey: "teacherId"} );
Teacher.hasMany(Classroom, { foreignKey: "teacherId"} );

module.exports = Classroom;