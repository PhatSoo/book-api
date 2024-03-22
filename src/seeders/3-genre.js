'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Genres', [
            {
                id: 1,
                genreName: 'Genre 1',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                genreName: 'Genre 2',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                genreName: 'Genre 3',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                genreName: 'Genre 4',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                genreName: 'Genre 5',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Genres', null, {});
    },
};
