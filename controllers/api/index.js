const router = require('express').Router();
const adminRoute = require('./admin-routes');
const studentRoute = require('./student-routes');

router.use('/admin', adminRoute);
router.use('/student', studentRoute);

module.exports = router;