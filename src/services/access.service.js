const bcrypt = require('bcrypt');

const { BadRequestError } = require('../middlewares/error.response');
const { findUserByEmail } = require('../models/repositories/user.repo');
const {
    generateKeyPair,
    createTokenPair,
    decodeToken,
} = require('./key.service');
const { deleteKeyByUserId } = require('../models/repositories/access_key.repo');

class AccessService {
    static async login({ email, password }) {
        if (!email || !password)
            throw new BadRequestError('Missing require parameter!');

        const foundUser = await findUserByEmail(email);

        if (!foundUser) throw new BadRequestError('Login failed!');

        const checkPass = await bcrypt.compare(password, foundUser.password);

        if (!checkPass) throw new BadRequestError('Login failed!');

        const { id, username } = foundUser;

        // Generate publicKey and privateKey pair
        const { publicKey, privateKey } = generateKeyPair();

        const res = await createTokenPair(
            {
                username,
                email,
            },
            id,
            privateKey,
            publicKey
        );

        return res; // { accessToken, userId }
    }

    static async logout({ accessToken, userId }) {
        const checkToken = await decodeToken({ accessToken, userId });

        if (!checkToken) throw new BadRequestError('Something went wrong!!');

        const deletedKey = await deleteKeyByUserId(userId);

        if (!deletedKey) throw new BadRequestError('Something went wrong!!');

        return null;
    }
}

module.exports = AccessService;
