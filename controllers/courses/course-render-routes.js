const router = require('express').Router();
const Course = require("../../models/Course");
const Student = require("../../models/Student");
const withAuth = require('../../utils/auth');

router.get('/signup', withAuth, async (req, res) => {
    try {

        const courseData = await Course.findAll({include: {all: true}});

        // Filter out those classes that a student is already enrolled in
        const filteredCourses = courseData.filter(course => {
            if (course.students.length > 0) {
                return course.students[0].id !== req.session.userID;
            }

            return true;
        });

        const courses = filteredCourses.map(course => course.get({ plain: true }));

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