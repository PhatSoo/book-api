const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

module.exports = {
    isValidEmail,
    StatusCode: require('./statusCodes'),
    StatusReason: require('./statusReasons'),
};
