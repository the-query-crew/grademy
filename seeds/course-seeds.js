const Course = require('../models/Course');

const courseData = [
  {
    course_name: 'Chemistry',
    course_description: 'Introduction to the general principles of chemistry for students planning a professional career in chemistry, a related science, the health professions, or engineering. Stoichiometry, atomic structure, chemical bonding and geometry, thermochemistry, gases, types of chemical reactions, statistics.',
    max_capacity: 100,
    admin_instructor_id: 1,
  },
  {
    course_name: 'Biology',
    course_description: 'Biology is the study of life. It includes an introduction to the scientific method, cytology, genetics, botany, zoology, ecology, taxonomy, evolution, chemistry, and microbiology. Course work, lab work, and examinations will prepare students for future science courses.',
    max_capacity: 100,
    admin_instructor_id: 2,
  },
  {
    course_name: 'Physics',
    course_description: 'A course in elementary physics, covers the basic concepts, principles and history of physics. Course topics will include selected topics in mechanics, heat, light, sound, electricity and magnetism, and modern physics.',
    max_capacity: 100,
    admin_instructor_id: 3,
  },
  {
    course_name: 'Math',
    course_description: 'Topics will include: solving and graphing linear equations and inequalities; working with variables, exponents, polynomials, and factoring. Depending on your math pathway, additional topics may include expressions and equations that are rational, radical, quadratic, exponential, and logarithmic.',
    max_capacity: 100,
    admin_instructor_id: 4,
  },
  {
    course_name: 'Spanish',
    course_description: 'Course Description: Spanish 2 builds upon knowledge gained in Spanish 1. This course will also reinforce the skills learned in Spanish I: listening, speaking, reading and writing. Emphasis is on perfecting pronunciation, mastery of the basic grammatical structures, and increased communicative proficiency.',
    max_capacity: 100,
    admin_instructor_id: 5,
  },
  {
    course_name: 'Statistics',
    course_description: 'Students are introduced to the fundamental concepts involved in using sample data to make inferences about populations. Included are the study of measures of central tendency and dispersion, finite probability, probability distributions, statistical inferences from large and small samples, linear regression, and correlation.',
    max_capacity: 100,
    admin_instructor_id: 2,
  },
  {
    course_name: 'Nutrition',
    course_description: 'This course is designed to provide students with an understanding of basic needs of daily nutrition, life cycle influences that affect nutrition and food choices, and the functions of proteins, energy, and the major vitamins and minerals.',
    max_capacity: 100,
    admin_instructor_id: 2,
  },
];

const seedCategories = () => Course.bulkCreate(courseData);

module.exports = seedCategories;
