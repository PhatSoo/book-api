'use strict';
const { Model } = require('sequelize');
// const user = require('./user');
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Author, { foreignKey: 'authorId' });
            this.belongsTo(models.Genre, { foreignKey: 'genreId' });
        }
    }
    Book.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: DataTypes.STRING,
            publishedDate: DataTypes.DATE,
            description: DataTypes.TEXT,
            isDraft: DataTypes.BOOLEAN,
            isPublished: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: 'Book',
            timestamps: true,
        }
    );
    return Book;
};
