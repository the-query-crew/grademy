//start with '/dash'
const router = require('express').Router();

router.get('/create', function(req, res) {
    res.render('create-course',  {
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
        student: req.session.student
    })
});

module.exports = router;