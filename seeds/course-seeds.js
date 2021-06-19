const Course = require('../models/Course');

const courseData = [
  {
    course_name: 'Chemistry',
    max_capacity: 100,
    admin_id: 1,
  },
  {
    course_name: 'Biology',
    max_capacity: 100,
    admin_id: 2,
  },
];

const seedCategories = () => Course.bulkCreate(courseData);

module.exports = seedCategories;
