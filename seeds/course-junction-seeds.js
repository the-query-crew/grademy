const CourseJunction = require('../models/CourseJunction');

const courseJunctionData = [
  {
    course_name: 'Chemistry',
    student_id: 1,
    course_id: 1,
  },
];

const seedCategories = () => CourseJunction.bulkCreate(courseJunctionData);

module.exports = seedCategories;
