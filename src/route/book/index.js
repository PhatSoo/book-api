const express = require('express');
const router = express.Router();

const BookController = require('../../controllers/book.controller');
const { errorHandler } = require('../../helpers/errorHandler');

router.get('/', errorHandler(BookController.listAllBooks));

module.exports = router;
