const express = require('express');

const router = express.Router();

router.use('/', require('./access'));
router.use('/book', require('./book'));

module.exports = router;
