const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class CourseJunctions extends Model {}

CourseJunctions.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true,
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { 
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'course_junction',
    }
);

module.exports = CourseJunctions;