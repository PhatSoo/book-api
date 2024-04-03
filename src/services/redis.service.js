const redis = require('../config/config.redis');
const { getNewBooks } = require('../models/repositories/book.repo');

const redisGetNewBooks = async (key) => {
    const redisData = await redis.get(key);
    if (redisData) {
        return JSON.parse(redisData);
    }
    const books = await getNewBooks();

    if (!books) throw new BadRequestError('Something went wrong!');

    redis.set(key, JSON.stringify(books), { EX: 60 * 60 }); // time to expire: 60 minutes
    return books;
};

module.exports = {
    redisGetNewBooks,
};
