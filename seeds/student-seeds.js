const Student = require('../models/Student');

const studentData = [
  {
    userName: 'TestStudent',
    email: 'student@test.com',
    password: '$2b$10$OSvwajVC3XhZB7yTPheqq.V8mM0tzTXT.RSgiGw3gGJKZn6NA3EcS',
    role: 'student',
  },
  {
    userName: 'micheqn3',
    email: 'mich@gmail.com',
    password: '$2b$10$OSvwajVC3XhZB7yTPheqq.V8mM0tzTXT.RSgiGw3gGJKZn6NA3EcS',
    role: 'student',
  },
];

const seedCategories = () => Student.bulkCreate(studentData);

module.exports = seedCategories;
