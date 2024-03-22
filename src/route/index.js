const express = require('express');

const router = express.Router();

router.use('/book', require('./book'));
router.use('/author', require('./author'));

router.use('/', require('./access'));

module.exports = router;
