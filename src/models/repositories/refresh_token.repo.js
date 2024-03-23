const { Refresh_Token } = require('../');

const findRefreshTokenUsedByUserId = async ({ userId, refreshToken }) => {
    console.log(userId);
    return await Refresh_Token.findOne({
        where: {
            userId,
            refreshTokenUsed: refreshToken,
        },
    });
};

const createRefreshTokenUsed = async ({ userId, oldToken }) => {
    return await Refresh_Token.create({ userId, refreshTokenUsed: oldToken });
};

const deleteRefreshTokenUsedyUserId = async (userId) => {
    return await Refresh_Token.destroy({ where: { userId } });
};

module.exports = {
    findRefreshTokenUsedByUserId,
    createRefreshTokenUsed,
    deleteRefreshTokenUsedyUserId,
};
