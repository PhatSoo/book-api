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

const findBookById = async ({ id }) => {
    return await Book.findOne({
        where: { id },
        ...options,
    });
};

module.exports = {
    find,
    findBookByAuthorId,
    findBookById,
};
