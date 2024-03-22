'use strict';
const { Model } = require('sequelize');
// const user = require('./user');
module.exports = (sequelize, DataTypes) => {
    class Author extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Author.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            authorName: DataTypes.STRING,
            dayOfBirth: DataTypes.DATE,
            description: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'Author',
            tableName: 'Authors',
            timestamps: true,
        }
    );
    return Author;
};
