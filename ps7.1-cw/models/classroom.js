const { sequelize, DataTypes } = require("../../config/database")

const Classroom = sequelize.define("Classroom", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
module.exports = Classroom;