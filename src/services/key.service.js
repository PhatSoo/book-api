const crypto = require('node:crypto');
const JWT = require('jsonwebtoken');

const { Access_Key } = require('../models');
const { BadRequestError } = require('../middlewares/error.response');
const { findKeyByUserId } = require('../models/repositories/access_key.repo');

const generateKeyPair = () => {
    return crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: 'pkcs1',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem',
        },
    });
};

const createTokenPair = async (payload, userId, privateKey, publicKey) => {
    const accessToken = await JWT.sign(payload, privateKey, {
        algorithm: 'RS256',
        expiresIn: '1h',
    });
    const refreshToken = await JWT.sign(payload, privateKey, {
        algorithm: 'RS256',
        expiresIn: '7d',
    });

    // check User has login ??
    const createKey = Access_Key.findOne({
        where: { userId },
    }).then(async (key) => {
        if (key) {
            // if Yes => update
            return await key.update({ refreshToken, privateKey, publicKey });
        }

        // if No => create new
        return await Access_Key.create({
            userId: userId,
            refreshToken,
            privateKey,
            publicKey,
        });
    });

    if (!createKey) throw new BadRequestError('Something went wrong! Re-login');

    return { userId, accessToken };
};

const decodeToken = async ({ accessToken, userId }) => {
    const foundKey = await findKeyByUserId(userId);

    if (!foundKey) throw new BadRequestError('Key not found!');

    const decoded = await JWT.decode(accessToken, foundKey.publicKey);

    if (!decoded) return false;

    return true;
};

module.exports = {
    generateKeyPair,
    createTokenPair,
    decodeToken,
};
