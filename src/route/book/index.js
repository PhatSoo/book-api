const express = require('express');
const router = express.Router();

const BookController = require('../../controllers/book.controller');
const { errorHandler } = require('../../helpers/errorHandler');
const { permission, authentication } = require('../../auth');

router.get('/author/:authorId', errorHandler(BookController.listBooksByAuthor)); // list all book of a specific author
router.get('/new', errorHandler(BookController.listNewBooks));
router.get('/:id', errorHandler(BookController.getBookDetails)); // get book detail
router.get('', errorHandler(BookController.listAllBooks));

router.use(authentication);
router.use(permission('ADMIN'));

router.post('', errorHandler(BookController.createBook));
router.put('/:id', errorHandler(BookController.updateBook));
router.delete('/:id', errorHandler(BookController.deleteBook));

module.exports = router;
