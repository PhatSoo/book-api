'use strict';
const { Model } = require('sequelize');
// const user = require('./user');
module.exports = (sequelize, DataTypes) => {
    class Refresh_Token extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User, { foreignKey: 'userId' });
        }
    }
    Refresh_Token.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: DataTypes.INTEGER,
            refreshTokenUsed: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'Refresh_Token',
            tableName: 'Refresh_Tokens',
            timestamps: true,
        }
    );
    return Refresh_Token;
};
