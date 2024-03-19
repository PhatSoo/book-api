const { NotFoundError } = require('../middlewares/error.response');
const { OkResponse } = require('../middlewares/success.response');

class BookController {
    listAllBooks = async (req, res, next) => {
        // new OkResponse({
        //     message: 'List all book success!!',
        //     metatdata: null,
        // }).send(res);
        throw new NotFoundError('error roi');
    };
}

module.exports = new BookController();
