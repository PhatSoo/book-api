const { UnAuthorizedError } = require('../middlewares/error.response');
const { HEADERS } = require('../utils');

const authentication = (req, res, next) => {
    if (!req.headers[HEADERS.AUTHORIZATION])
        throw new UnAuthorizedError('Please login first!');

    return next();
};

module.exports = {
    authentication,
};
