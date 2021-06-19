const router = require('express').Router();
const Course = require("../../models/Course");
const CourseJunction = require("../../models/CourseJunction");

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


module.exports = router;