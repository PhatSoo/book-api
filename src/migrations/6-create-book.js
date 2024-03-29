'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Books', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
                unique: true,
            },
            authorId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Authors',
                    key: 'id',
                },
            },
            genreId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Genres',
                    key: 'id',
                },
            },
            description: {
                type: Sequelize.STRING,
            },
            publishedDate: {
                type: Sequelize.DATE,
            },
            isDraft: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
            },
            isPublished: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Books');
    },
};
