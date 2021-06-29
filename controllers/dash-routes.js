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

router.get('/edit/:id', async (req, res) => {
    try {
        const courseDataDB = await Course.findByPk(req.params.id);
    
        const course = courseDataDB.get({ plain: true });
        console.log(course)
      res.render('edit-course',  {
        loggedIn: req.session.loggedIn,
        admin: req.session.admin,
        student: req.session.student,
        course
    })
    } catch (err) {
      res.status(500).json(err);
    }
});
  

module.exports = router;