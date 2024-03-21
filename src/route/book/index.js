const express = require('express');
const router = express.Router();

const BookController = require('../../controllers/book.controller');
const { errorHandler } = require('../../helpers/errorHandler');
const { permission, authentication } = require('../../auth');

// router.use(permission('AUTHOR'));

router.get('/', errorHandler(BookController.listAllBooks));
router.get('/:id', errorHandler(BookController.listAllBooks)); // get book detail
router.get('/author/:userId', errorHandler(BookController.listAllBooks)); // list all book of a specific author

module.exports = router;
