const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashRoutes = require('./dash-routes');
const courseRoutes = require('./courses');

router.use('/dash', dashRoutes);
router.use('/courses', courseRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
