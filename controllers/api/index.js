const router = require('express').Router();
const adminRoute = require('./admin-routes');
const studentRoute = require('./student-routes');
const courseRoute = require('./course-routes');
const { route } = require('./admin-routes');

router.use('/admin', adminRoute);
router.use('/student', studentRoute);
router.use('/courses', courseRoute);

module.exports = router;