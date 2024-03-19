const express = require('express');
const router = express.Router();

const BookController = require('../../controllers/book.controller');
const { asyncHandler } = require('../../helpers/asyncHandler');

router.get('/', asyncHandler(BookController.listAllBooks));

module.exports = router;
