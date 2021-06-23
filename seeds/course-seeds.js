const Course = require('../models/Course');

const courseData = [
  {
    course_name: 'Chemistry',
    max_capacity: 100,
    teacher_id: 1,
  },
];

const seedCategories = () => Course.bulkCreate(courseData);

module.exports = seedCategories;
