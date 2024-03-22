const { User } = require('../');

const findUserByEmail = async (email) => {
    return await User.findOne({ where: { email } });
};

const createUser = async (payload) => {
    return await User.create(payload);
};

module.exports = {
    findUserByEmail,
    createUser,
};
