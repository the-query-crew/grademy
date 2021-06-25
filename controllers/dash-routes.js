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

// router.get('/dashboard-admin', async (req, res) => {
//     try {
//       const courseData = await Course.findAll({
//         where :
//             {
//                 admin_instructor_id: req.session.userID
//             }
//         },
//       );
  
//       const courses = courseData.map((course) =>
//         course.get({ plain: true })
//       );
//         console.log(courses)
//       res.render('dashboard-admin', {
//         courses,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });
  

module.exports = router;