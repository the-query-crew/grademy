const router = require('express').Router();
const withAuth = require('../utils/auth')

// Home routes

// Log in page

router.get('/', (req, res) => {
    res.render('login', {
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
        student: req.session.student
    });
})

router.get('/dashboard-admin', withAuth, (req, res) => {

    res.render('dashboard-admin', {
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
        student: req.session.student
    });
})

router.get('/dashboard-student', withAuth, (req, res) => {

    res.render('dashboard-student', {
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
        student: req.session.student
    });
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