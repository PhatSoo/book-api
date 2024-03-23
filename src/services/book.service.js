const {
    BadRequestError,
    NotFoundError,
} = require('../middlewares/error.response');
const {
    find,
    findBookByAuthorId,
    findBookById,
    findBookByTitle,
    createBook,
    updateBook,
    destroyBook,
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
        const book = await findBookById(id);

        if (!book) throw new NotFoundError('Book not found!');

        return book;
    }

    static async createBook(payload) {
        const { title } = payload;
        const foundBook = await findBookByTitle({ title });

        if (foundBook.length > 0)
            throw new BadRequestError('Book title has been used');

        const createdBook = await createBook(payload);

        if (!createdBook) throw new BadRequestError('Something wrong happen!');

        return createdBook;
    }

    static async updateBook({ id }, payload) {
        const foundBook = await findBookById(id);

        if (!foundBook) throw new NotFoundError('Book not found!');

        const updatedBook = await updateBook(id, payload);
        if (!updatedBook) throw new BadRequestError('Update book failed');

        return null;
    }

    static async deleteBook({ id }) {
        const foundBook = await findBookById(id);

        if (!foundBook) throw new NotFoundError('Book not found!');

        const removedBook = await destroyBook(id);
        if (!removedBook) throw new BadRequestError('Delete book failed');

        return null;
    }
}

module.exports = BookService;
