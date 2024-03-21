const crypto = require('node:crypto');
const JWT = require('jsonwebtoken');

const { BadRequestError } = require('../middlewares/error.response');
const {
    findKeyByUserId,
    findOneAndUpdate,
} = require('../models/repositories/access_key.repo');

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

const createTokenPair = async (payload) => {
    const { userId } = payload;
    // Generate publicKey and privateKey
    const { publicKey, privateKey } = generateKeyPair();

    const accessToken = JWT.sign(payload, privateKey, {
        algorithm: 'PS256',
        expiresIn: '1m',
    });
    const refreshToken = JWT.sign(payload, privateKey, {
        algorithm: 'PS256',
        expiresIn: '7d',
    });

    // check User has login ??
    const createOrUpdateKey = await findOneAndUpdate({ userId, publicKey });

    if (!createOrUpdateKey)
        throw new BadRequestError('Something went wrong! Re-login');

    return { accessToken, refreshToken };
};

const decodeToken = (token) => {
    return JWT.decode(token);
};

const verifyToken = async (token) => {
    try {
        const { userId } = decodeToken(token);
        const foundKey = await findKeyByUserId(userId);

        if (!foundKey) throw new BadRequestError('Key not found!');

        // catch error verified
        const verified = JWT.verify(token, foundKey.publicKey, {
            algorithms: 'PS256',
        });

        return verified;
    } catch (error) {
        // catch error verified
        return null;
    }
};

module.exports = {
    createTokenPair,
    verifyToken,
    decodeToken,
};
