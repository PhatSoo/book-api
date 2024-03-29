'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            email: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            role: DataTypes.ENUM('USER', 'ADMIN'),
        },
        {
            sequelize,
            modelName: 'User',
            timestamps: true,
        }
    );
    return User;
};
