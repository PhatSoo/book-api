const {
    BadRequestError,
    NotFoundError,
} = require('../middlewares/error.response');
const {
    find,
    findBookByAuthorId,
    findBookById,
} = require('../models/repositories/book.repo');

class BookService {
    static async listAllBooks({ limit = 5, page = 1 }) {
        limit = parseInt(limit);
        page = parseInt(page);

        const offset = (page - 1) * limit;

        const getBooks = await find({ limit, offset });
        if (!getBooks) throw new NotFoundError('Book not found!');

        const { rows, count } = getBooks;

        return {
            data: rows,
            limit,
            page: page,
            total: count,
        };
    }

    static async listBooksByAuthor({ authorId, limit = 5, page = 1 }) {
        limit = parseInt(limit);
        page = parseInt(page);

        const offset = (page - 1) * limit;

        const getBooks = await findBookByAuthorId({ authorId, limit, offset });

        if (!getBooks) throw new NotFoundError('Book not found!');

        const { rows, count } = getBooks;

        return {
            data: rows,
            limit,
            page: page,
            total: count,
        };
    }

    static async getBookDetails({ id }) {
        const book = await findBookById({ id: parseInt(id) });

        if (!book) throw new NotFoundError('Book not found!');

        return book;
    }
}

module.exports = BookService;
