const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Student extends Model { // Uses bcrypt to validate password
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}
Student.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            isEmail: true,
        }
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4],
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, { 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'student',
    hooks: {
        async beforeCreate(newUserData) { // Hashes password before creating student in table
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData; 
        },
    }
}
);

module.exports = Student;