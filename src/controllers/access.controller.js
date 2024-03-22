const {
    OkResponse,
    CreatedResponse,
} = require('../middlewares/success.response');
const AccessService = require('../services/access.service');
const { HEADERS } = require('../constants');

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
                userId: req.user.userId,
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

    static register = async (req, res, next) => {
        new CreatedResponse({
            message: 'Register successfully!',
            metadata: await AccessService.register(req.body),
        }).send(res);
    };
}

module.exports = AccessController;
