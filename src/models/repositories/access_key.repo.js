const { Access_Key } = require('../');

const findKeyByUserId = async (userId) => {
    return await Access_Key.findOne({ where: { userId } });
};

const deleteKeyByUserId = async (userId) => {
    return await Access_Key.destroy({ where: { userId } });
};

const findOneAndUpdate = async ({ userId, publicKey }) => {
    return Access_Key.findOne({
        where: { userId },
    }).then(async (key) => {
        if (key) {
            // if Yes => update
            return await key.update({ publicKey });
        }

        // if No => create new
        return await Access_Key.create({
            userId,
            publicKey,
        });
    });
};

module.exports = {
    findKeyByUserId,
    deleteKeyByUserId,
    findOneAndUpdate,
};
