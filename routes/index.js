const router = require('express').Router();

const authRoutes = require('./web/auth');
const webRoutes = require('./web/web');

router.use('/', webRoutes);
router.use('/api', authRoutes);

module.exports = router;