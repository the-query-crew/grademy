const router = require('express').Router();

// Home routes

// Log in page

router.get('/', (req, res) => {
    res.render('login', {
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
        student: req.session.student
    });
})


router.get('/dashboard-admin', (req, res) => {

    res.render('dashboard-admin', {
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
        student: req.session.student
    });
})

router.get('/dashboard-student', (req, res) => {

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

module.exports = router;