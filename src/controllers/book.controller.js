const {
    OkResponse,
    CreatedResponse,
    NoContentResponse,
} = require('../middlewares/success.response');
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

    // admin route
    createBook = async (req, res, next) => {
        new CreatedResponse({
            message: 'Create a new book successful!',
            metadata: await BookService.createBook(req.body),
        }).send(res);
    };

    updateBook = async (req, res, next) => {
        new OkResponse({
            message: 'Update book successful!',
            metadata: await BookService.updateBook(req.params, req.body),
        }).send(res);
    };

    deleteBook = async (req, res, next) => {
        new OkResponse({
            message: 'Delete book successful!',
            metadata: await BookService.deleteBook(req.params),
        }).send(res);
    };
}

module.exports = new BookController();
