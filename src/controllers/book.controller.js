const { NotFoundError } = require('../middlewares/error.response');
const { OkResponse } = require('../middlewares/success.response');

class BookController {
    listAllBooks = async (req, res, next) => {
        new OkResponse({
            message: 'List all book success!!',
            metadata: null,
        }).send(res);
    };
}

module.exports = new BookController();
