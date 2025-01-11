const { sequelize, DataTypes } = require("../../config/database")

const Teacher = sequelize.define("Teacher", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
});
module.exports = Teacher;