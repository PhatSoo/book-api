const { Book, Author, Genre } = require('../');

const options = {
    attributes: { exclude: ['authorId', 'genreId'] },
    include: [
        {
            model: Author,
            attributes: ['id', 'authorName'],
        },
        {
            model: Genre,
            attributes: ['id', 'genreName'],
        },
    ],
};

const find = async ({ limit, offset }) => {
    return await Book.findAndCountAll({
        limit,
        offset,
        ...options,
    });
};

const findBookByAuthorId = async ({ authorId, limit, offset }) => {
    return await Book.findAndCountAll({
        limit,
        offset,
        where: { authorId },
        ...options,
    });
};

const findBookById = async (id) => {
    return await Book.findOne({
        where: { id },
        ...options,
    });
};

const findBookByTitle = async ({ title }) => {
    return await Book.findAll({ where: { title } });
};

const createBook = async (payload) => {
    return await Book.create(payload);
};

const updateBook = async (id, payload) => {
    return await Book.update(payload, { where: { id } });
};

const destroyBook = async (id) => {
    return await Book.destroy({ where: { id } });
};

module.exports = {
    find,
    findBookByAuthorId,
    findBookById,
    findBookByTitle,
    createBook,
    updateBook,
    destroyBook,
};
