const router = require('express').Router();
const Student = require('../models/Student');
const withAuth = require('../utils/auth')
const Course = require('../models/Course')

// Home routes

// Log in page

// If the user is already logged in, take them to their dash. If not, take them to the log in screen
router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        if (req.session.admin === true) {
            res.redirect('/dashboard-admin');
        } else if (req.session.student === true) {
            res.redirect('/dashboard-student');
        }
        return;
    }
    res.render('login', {
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
        student: req.session.student
    });
})

router.get('/dashboard-admin', withAuth, async (req, res) => {
    try {
        const courseData = await Course.findAll({
          where :
              {
                  admin_instructor_id: req.session.userID
              }
          },
        );
    
        const courses = courseData.map((course) =>
          course.get({ plain: true })
        );
          console.log(courses)
        res.render('dashboard-admin', {
          courses: {courses},
          loggedIn: req.session.loggedIn,
          admin: req.session.admin,
          student: req.session.student
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})

router.get('/dashboard-student', withAuth, async (req, res) => {

    try {
        const studentData = await Student.findByPk(req.session.userID, {include: {all: true}});
        const student = studentData.get({ plain: true });
        res.render('dashboard-student', {
            studentData: student,
            loggedIn: req.session.loggedIn,
            admin: req.session.admin,
            student: req.session.student
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// Sign up page
router.get('/create', (req, res) => {
    res.render('signup', {
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
        student: req.session.student
    });
})

// Chat page
router.get('/chat', withAuth, (req, res) => {
    res.render('chat',  {
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
        student: req.session.student,
        userName: req.session.userName
    })
});

module.exports = router;