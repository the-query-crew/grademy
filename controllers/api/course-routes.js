// /api/courses

const router = require('express').Router();
const Course = require("../../models/Course");
const CourseJunction = require("../../models/CourseJunction");
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const d = await Course.create({
            course_name: req.body.courseName,
            max_capacity: req.body.maxCapacity,
            admin_instructor_id: req.session.userID,
            course_description: req.body.courseDescription,
        }) 
        res.status(200).json({message: "course created"});
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/', async (req, res) => {
    try {
        const courseData = await Course.findAll({ include: { all: true }});
        const courses = courseData.map(course => course.get({ plain: true }));
        res.status(200).json(courses);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/signup', async (req, res) => {
    try {
        const signupData = await CourseJunction.create({
            student_id: req.session.userID,
            course_id: req.body.courseId,
        });
        res.status(200).json(signupData.get({ plain: true }));
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
      const courseDataDB = await Course.findByPk(req.params.id);
  
      const course = courseDataDB.get({ plain: true });
  
      res.render('view-course', { 
        course, 
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
        student: req.session.student });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

module.exports = router;