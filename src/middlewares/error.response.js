const { StatusCode, StatusReason } = require('../utils');

class ResponseError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.status = statusCode;
    }
}

class BadRequestError extends ResponseError {
    constructor(
        message = StatusReason.BAD_REQUEST,
        statusCode = StatusCode.BAD_REQUEST
    ) {
        super(message, statusCode);
    }
}

class UnAuthorizedError extends ResponseError {
    constructor(
        message = StatusReason.UNAUTHORIZED,
        statusCode = StatusCode.UNAUTHORIZED
    ) {
        super(message, statusCode);
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
    UnAuthorizedError,
    BadRequestError,
};
