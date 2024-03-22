const express = require('express');
const router = express.Router();

const BookController = require('../../controllers/book.controller');
const { errorHandler } = require('../../helpers/errorHandler');
const { permission, authentication } = require('../../auth');

// router.use(permission('AUTHOR'));

router.get('/author/:authorId', errorHandler(BookController.listBooksByAuthor)); // list all book of a specific author
router.get('/:id', errorHandler(BookController.getBookDetails)); // get book detail
router.get('/', errorHandler(BookController.listAllBooks));

module.exports = router;
