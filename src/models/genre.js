'use strict';
const { Model } = require('sequelize');
// const user = require('./user');
module.exports = (sequelize, DataTypes) => {
    class Genre extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Genre.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            genreName: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Genre',
            tableName: 'Genres',
            timestamps: true,
        }
    );
    return Genre;
};
