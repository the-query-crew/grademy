const router = require('express').Router();
const Course = require("../../models/Course");
const CourseJunction = require("../../models/CourseJunction");
const withAuth = require('../../utils/auth');

router.get('/signup', withAuth, async (req, res) => {
    try {

        const courseData = await Course.findAll({include: {all: true}});
        const courses = courseData.map(course => course.get({ plain: true }));
        
        res.render('view-all-courses', {
            courses: {courses},
            loggedIn: req.session.loggedIn,
            admin: req.session.admin,
            student: req.session.student
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;