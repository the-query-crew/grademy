const seedAdmins = require('./admin-seeds');
const seedStudents = require('./student-seeds');
const seedCourses = require('./course-seeds');
const seedCourseJunction = require('./course-junction-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  // await sequelize.sync({ force: true });
  // console.log('\n----- DATABASE SYNCED -----\n');
  // await seedAdmins();
  // console.log('\n----- ADMINS SEEDED -----\n');

  // await seedStudents();
  // console.log('\n----- STUDENTS SEEDED -----\n');

  // await seedCourses();
  // console.log('\n----- COURSES SEEDED -----\n');

  // await seedCourseJunction();
  // console.log('\n----- COURSE JUNCTIONS SEEDED -----\n');
  process.exit(0);
};

seedAll();
