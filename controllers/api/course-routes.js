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
            teacher_id: req.session.userID,
            //course_description: req.body.courseDescription,
        }) 
        res.status(200).json({message: "course created"});
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;