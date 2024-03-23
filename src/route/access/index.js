const express = require('express');
const router = express.Router();

const AccessController = require('../../controllers/access.controller');
const { errorHandler } = require('../../helpers/errorHandler');
const { authentication } = require('../../auth');

router.post('/login', errorHandler(AccessController.login));
router.post('/register', errorHandler(AccessController.register));

router.use(authentication);
router.post('/logout', errorHandler(AccessController.logout));
router.post('/refresh-token', errorHandler(AccessController.refreshToken));

module.exports = router;
