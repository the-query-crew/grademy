const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Course extends Model {}

Course.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
    },
    course_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    max_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{ 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'course',
}
);

module.exports = Course;