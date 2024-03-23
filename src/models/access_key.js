'use strict';
const { Model } = require('sequelize');
// const user = require('./user');
module.exports = (sequelize, DataTypes) => {
    class Access_Key extends Model {
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
    Access_Key.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: DataTypes.INTEGER,
            publicKey: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'Access_Key',
            tableName: 'Access_Keys',
            timestamps: true,
        }
    );
    return Access_Key;
};
