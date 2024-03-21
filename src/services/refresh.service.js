const {
    createRefreshTokenUsed,
    findRefreshTokenUsedByUserId,
} = require('../models/repositories/refresh_token.repo');
const { decodeToken } = require('./key.service');

const findRefreshTokenUsed = async (refreshToken) => {
    const { userId } = decodeToken(refreshToken);

    const checkUsed = await findRefreshTokenUsedByUserId({
        userId,
        refreshToken,
    });

    if (checkUsed) return true;

    return false;
};

const refreshTokenUsedStore = async (userId, oldToken) => {
    return await createRefreshTokenUsed({
        userId,
        oldToken,
    });
};

module.exports = {
    findRefreshTokenUsed,
    refreshTokenUsedStore,
};
