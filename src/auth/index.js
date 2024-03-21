const { errorHandler } = require('../helpers/errorHandler');
const {
    UnAuthorizedError,
    BadRequestError,
} = require('../middlewares/error.response');
const { verifyToken, createTokenPair } = require('../services/key.service');
const { HEADERS } = require('../utils');

const authentication = errorHandler(async (req, res, next) => {
    const accessToken = req.headers[HEADERS.AUTHORIZATION];

    if (!accessToken) throw new UnAuthorizedError('Please login first!');

    const checkExpired = await verifyToken(accessToken);

    if (!checkExpired) throw new UnAuthorizedError('Token is invalid');

    return next();
});

module.exports = {
    authentication,
};
