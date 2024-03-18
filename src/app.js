require('dotenv/config');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// connect db
// require('./configs/config.mysql');

// route
app.use('/api/v1', require('./route'));

// handle error
app.use((req, res, next) => {
    const error = new Error();
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    const statusCode = error.status;
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: 'Page Not Found',
    });
});

module.exports = app;
