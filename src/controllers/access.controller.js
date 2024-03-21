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
            }),
        }).send(res);
    };

    static refreshToken = async (req, res, next) => {
        new OkResponse({
            message: 'Refresh Token successfully!',
            metadata: await AccessService.refreshToken({
                refreshToken: req.headers[HEADERS.RF_TOKEN],
            }),
        }).send(res);
    };
}

module.exports = AccessController;
