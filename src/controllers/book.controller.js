const { OkResponse } = require('../middlewares/success.response');
const BookService = require('../services/book.service');

class BookController {
    listAllBooks = async (req, res, next) => {
        new OkResponse({
            message: 'Listing all books successful!',
            metadata: await BookService.listAllBooks(req.query),
        }).send(res);
    };

    listBooksByAuthor = async (req, res, next) => {
        new OkResponse({
            message: 'Getting books by author successful!',
            metadata: await BookService.listBooksByAuthor({
                ...req.params,
                ...req.query,
            }),
        }).send(res);
    };

    getBookDetails = async (req, res, next) => {
        new OkResponse({
            message: 'Getting book details successful!',
            metadata: await BookService.getBookDetails(req.params),
        }).send(res);
    };
}

module.exports = new BookController();
