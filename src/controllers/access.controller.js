const { OkResponse } = require('../middlewares/success.response');
const AccessService = require('../services/access.service');
const { HEADERS } = require('../utils');

class AccessController {
    static login = async (req, res, next) => {
        new OkResponse({
            message: 'Login successfully!',
            metadata: await AccessService.login(req.body),
        }).send(res);
    };

    static logout = async (req, res, next) => {
        new OkResponse({
            message: 'Logout successfully!',
            metadata: await AccessService.logout({
                accessToken: req.headers[HEADERS.AUTHORIZATION],
                userId: req.headers[HEADERS.CLIENT_ID],
            }),
        }).send(res);
    };
}

module.exports = AccessController;
