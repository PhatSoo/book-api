const HEADERS = {
    AUTHORIZATION: 'authorization',
    RF_TOKEN: 'x-rf-token',
};

const ROLES = ['ADMIN', 'USER', 'AUTHOR'];

module.exports = {
    StatusCode: require('./statusCodes'),
    StatusReason: require('./statusReasons'),
    HEADERS,
    ROLES,
};
