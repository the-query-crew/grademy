const router = require('express').Router();
const courseRoutes = require('./course-render-routes');

router.use('/', courseRoutes);

module.exports = router;
