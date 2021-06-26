//start with '/dash'
const router = require('express').Router();
const Admin  = require('../models/Admin')
const Course = require('../models/Course')

router.get('/create', function(req, res) {
    res.render('create-course',  {
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
        student: req.session.student
    })
});
  

module.exports = router;