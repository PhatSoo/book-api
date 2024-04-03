const { promisify } = require('util');
const { createClient } = require('redis');

const { REDIS_HOST, REDIS_PORT, REDIS_PASS } = process.env;

const redisClient = createClient({
    password: REDIS_PASS,
    socket: {
        port: REDIS_PORT,
        host: REDIS_HOST,
    },
});

redisClient.connect();
redisClient.on('connect', () => console.log('Redis connect successful!'));

module.exports = redisClient;
