const { BadRequestError } = require('../middlewares/error.response');
const {
    findUserByEmail,
    createUser,
} = require('../models/repositories/user.repo');

const createNewUser = async (payload) => {
    const foundUser = await findUserByEmail(payload.email);

    if (foundUser)
        throw new BadRequestError('This email has been used already!');

    return await createUser(payload);
};

module.exports = {
    createNewUser,
};
