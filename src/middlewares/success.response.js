const { StatusCode, StatusReason } = require('../utils');

class SuccessResponse {
    constructor({ message, statusCode, statusReason, metatdata }) {
        this.message = !message ? statusReason : message;
        console.log(statusCode);
        this.status = statusCode;
        this.metatdata = metatdata;
    }

    send(res) {
        return res.status(this.status).json(this);
    }
}

class OkResponse extends SuccessResponse {
    constructor({
        message,
        metatdata,
        statusCode = StatusCode.OK,
        statusReason = StatusReason.OK,
    }) {
        super({ message, metatdata, statusCode, statusReason });
    }
}

class CreatedResponse extends SuccessResponse {
    constructor({
        message,
        metatdata,
        statusCode = StatusCode.CREATED,
        statusReason = StatusReason.CREATED,
    }) {
        super({ message, metatdata, statusCode, statusReason });
    }
}

module.exports = {
    OkResponse,
    CreatedResponse,
};
