const { StatusCode, StatusReason } = require('../utils');

class ResponseError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.status = statusCode;
    }
}

class NotFoundError extends ResponseError {
    constructor(
        message = StatusReason.NOT_FOUND,
        statusCode = StatusCode.NOT_FOUND
    ) {
        super(message, statusCode);
    }
}

module.exports = {
    NotFoundError,
};
