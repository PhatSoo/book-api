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

// test connect db
require('./config/config.mysql');

// route
app.use('/api/v1', require('./route'));

// handle error
app.use((req, res, next) => {
    const error = new Error('Page Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        stack: error.stack, // show error details
        message: error.message || 'Internal Server Error',
    });
});

module.exports = app;
