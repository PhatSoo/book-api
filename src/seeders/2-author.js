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
        await queryInterface.bulkInsert('Authors', [
            {
                id: 1,
                authorName: 'Author 1',
                dayOfBird: new Date(),
                description: 'Author desc',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                authorName: 'Author 2',
                dayOfBird: new Date(),
                description: 'Author desc',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                authorName: 'Author 3',
                dayOfBird: new Date(),
                description: 'Author desc',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                authorName: 'Author 4',
                dayOfBird: new Date(),
                description: 'Author desc',
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
        await queryInterface.bulkDelete('Authors', null, {});
    },
};
