const bcrypt = require('bcrypt');

const {
    BadRequestError,
    UnAuthorizedError,
} = require('../middlewares/error.response');
const { findUserByEmail } = require('../models/repositories/user.repo');
const { createTokenPair, verifyToken } = require('./key.service');
const {
    deleteKeyByUserId,
    findKeyByUserId,
} = require('../models/repositories/access_key.repo');
const {
    refreshTokenUsedStore,
    findRefreshTokenUsed,
} = require('./refresh.service');
const {
    deleteRefreshTokenUsedyUserId,
} = require('../models/repositories/refresh_token.repo');
const { isValidEmail } = require('../utils');
const { createNewUser } = require('./user.service');
const { ROLES } = require('../constants');

class AccessService {
    static async login({ email, password }) {
        if (!email || !password)
            throw new BadRequestError('Missing require parameter!');

        const foundUser = await findUserByEmail(email);

        if (!foundUser) throw new BadRequestError('Login failed!');

        const checkPass = await bcrypt.compare(password, foundUser.password);

        if (!checkPass) throw new BadRequestError('Login failed!');

        const { id, username, role } = foundUser;

        // Generate accessToken and refreshToken
        const res = await createTokenPair({
            userId: id,
            username,
            email,
            role,
        });

        // all pass => success
        return res; // { accessToken, refreshToken }
    }

    static async logout({ accessToken }) {
        // decode token and get userId
        const checkToken = await verifyToken(accessToken);

        if (!checkToken) throw new BadRequestError('Something went wrong!!');

        const deletedKey = await deleteKeyByUserId(checkToken.userId);
        if (!deletedKey) throw new BadRequestError('Something went wrong!!');

        // clear table store refreshTokenUsed of userId
        await deleteRefreshTokenUsedyUserId(checkToken.userId);

        // all pass => success
        return null;
    }

    static async refreshToken({ userId, refreshToken }) {
        // check this refreshToken was being used in the pass
        const checkUsed = await findRefreshTokenUsed({ userId, refreshToken });
        if (checkUsed)
            throw new UnAuthorizedError('Token is invalid! Re-login!');

        // decode token and get userId
        const checkToken = await verifyToken(refreshToken);

        if (!checkToken)
            throw new BadRequestError('Refresh token is invalid!!');

        const { username, email, role } = checkToken;
        const foundKey = await findKeyByUserId(userId);

        if (!foundKey)
            throw new BadRequestError('Some thing went wrong! Please re-login');

        const reGenerateToken = await createTokenPair({
            userId,
            username,
            email,
            role,
        });

        // store refresh token to check which user uses old refreshToken and force logout
        const refreshUsedStore = await refreshTokenUsedStore(
            foundKey.userId,
            refreshToken
        );

        if (!refreshUsedStore)
            throw new BadRequestError('Disable refresh token failed!');

        // all pass => success
        return reGenerateToken; // { accessToken, refreshToken }
    }

    static async register({ email, username, password, role = 'USER' }) {
        if (!email || !username || !password)
            throw new BadRequestError('Missing requirement params!');

        const checkValidEmail = isValidEmail(email);
        if (!checkValidEmail) throw new BadRequestError('Email is not valid!');

        if (!ROLES.includes(role))
            throw new BadRequestError('Role is invalid!');

        const createdUser = await createNewUser({
            email,
            username,
            password: bcrypt.hashSync(password, 10),
            role,
        });

        if (!createdUser)
            throw new BadRequestError(
                'Cannot create account! Please try again.'
            );

        // all pass => success
        return null;
    }
}

module.exports = AccessService;
