const { StatusCode, StatusReason } = require('../utils');

class SuccessResponse {
    constructor({ message, statusCode, statusReason, metadata }) {
        this.message = !message ? statusReason : message;
        console.log(statusCode);
        this.status = statusCode;
        this.metadata = metadata;
    }

    send(res) {
        return res.status(this.status).json(this);
    }
}

class OkResponse extends SuccessResponse {
    constructor({
        message,
        metadata,
        statusCode = StatusCode.OK,
        statusReason = StatusReason.OK,
    }) {
        super({ message, metadata, statusCode, statusReason });
    }
}

class CreatedResponse extends SuccessResponse {
    constructor({
        message,
        metadata,
        statusCode = StatusCode.CREATED,
        statusReason = StatusReason.CREATED,
    }) {
        super({ message, metadata, statusCode, statusReason });
    }
}

module.exports = {
    OkResponse,
    CreatedResponse,
};
