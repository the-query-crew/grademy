const Admin = require('../models/Admin');

const adminData = [
  {
    userName: 'TestAdmin',
    email: 'admin@test.com',
    password: '$2b$10$OSvwajVC3XhZB7yTPheqq.V8mM0tzTXT.RSgiGw3gGJKZn6NA3EcS',
    role: 'admin',
  },
  {
    userName: 'jeff123',
    email: 'jeff@gmail.com',
    password: '$2b$10$OSvwajVC3XhZB7yTPheqq.V8mM0tzTXT.RSgiGw3gGJKZn6NA3EcS',
    role: 'admin',
  },
  {
    userName: 'admin123',
    email: 'user_admin@gmail.com',
    password: '$2b$10$OSvwajVC3XhZB7yTPheqq.V8mM0tzTXT.RSgiGw3gGJKZn6NA3EcS',
    role: 'admin',
  },
  {
    userName: 'david_admin123',
    email: 'david_admin123@gmail.com',
    password: '$2b$10$OSvwajVC3XhZB7yTPheqq.V8mM0tzTXT.RSgiGw3gGJKZn6NA3EcS',
    role: 'admin',
  },
  {
    userName: 'teacher5',
    email: 'teacher5@gmail.com',
    password: '$2b$10$OSvwajVC3XhZB7yTPheqq.V8mM0tzTXT.RSgiGw3gGJKZn6NA3EcS',
    role: 'admin',
  },
];

const seedCategories = () => Admin.bulkCreate(adminData);

module.exports = seedCategories;
