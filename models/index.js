// Associations for models
const Course = require('./Course');
const CourseJunctions = require('./CourseJunction');
const CourseJunction = require('./CourseJunction');
const Student = require('./Student');

Student.belongsToMany(Course, {
    through: CourseJunctions,
});

Course.belongsToMany(Student, {
    through: CourseJunction,
});