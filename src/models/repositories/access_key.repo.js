const { Access_Key } = require('../');

const findKeyByUserId = async (userId) => {
    return await Access_Key.findOne({ userId });
};

const deleteKeyByUserId = async (userId) => {
    return await Access_Key.destroy({ where: { userId } });
};

module.exports = {
    findKeyByUserId,
    deleteKeyByUserId,
};
