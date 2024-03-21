const { errorHandler } = require('../helpers/errorHandler');
const {
    UnAuthorizedError,
    ForbiddenError,
} = require('../middlewares/error.response');
const { verifyToken } = require('../services/key.service');
const { HEADERS, ROLES } = require('../utils');

const authentication = errorHandler(async (req, res, next) => {
    const accessToken = req.headers[HEADERS.AUTHORIZATION];

    if (!accessToken) throw new UnAuthorizedError('Please login first!');

    const checkExpired = await verifyToken(accessToken);

    if (!checkExpired) throw new UnAuthorizedError('Token is invalid');

    const { id, username, email, role } = checkExpired;

    req.user = { userId: id, username, email };
    req.role = role;

    return next();
});

const permission = (permission = ROLES) => {
    return (req, res, next) => {
        const userRole = req.role;
        if (!userRole) throw new UnAuthorizedError('Please re-login!');

        if (!permission.includes(userRole)) {
            throw new ForbiddenError('You have no permission!');
        }

        return next();
    };
};

module.exports = {
    authentication,
    permission,
};
