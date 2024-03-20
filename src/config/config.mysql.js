require('dotenv/config');
const { Sequelize } = require('sequelize');
const { DB_HOST, DB_NAME, DB_USER, DB_PASS, DB_PORT } = process.env;

class Database {
    constructor() {
        if (!Database.instance) {
            this.sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
                host: DB_HOST,
                port: DB_PORT,
                dialect: 'mysql',
            });
            Database.instance = this;
        }

        return Database.instance;
    }

    async testConnect() {
        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

const database = new Database();
database.testConnect();

module.exports = database;

// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//     host: DB_HOST,
//     user: DB_USER,
//     password: DB_PASS,
//     port: DB_PORT,
//     database: DB_NAME,
// });

// connection.connect((err) => {
//     if (err) return console.log(err);

//     console.log('connected');
// });

// module.exports = connection;
