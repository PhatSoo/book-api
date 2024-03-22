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
        await queryInterface.bulkInsert('Books', [
            {
                title: 'Book 1',
                authorId: 1,
                genreId: 1,
                publishedDate: '2023-01-01',
                description: 'Description for Book 1',
                isDraft: true,
                isPublished: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Book 2',
                authorId: 2,
                genreId: 2,
                publishedDate: '2023-02-01',
                description: 'Description for Book 2',
                isDraft: true,
                isPublished: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Book 3',
                authorId: 3,
                genreId: 3,
                publishedDate: '2023-03-01',
                description: 'Description for Book 3',
                isDraft: true,
                isPublished: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Book 4',
                authorId: 4,
                genreId: 4,
                publishedDate: '2023-04-01',
                description: 'Description for Book 4',
                isDraft: true,
                isPublished: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Book 5',
                authorId: 1,
                genreId: 2,
                publishedDate: '2023-05-01',
                description: 'Description for Book 5',
                isDraft: true,
                isPublished: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Book 6',
                authorId: 2,
                genreId: 3,
                publishedDate: '2023-06-01',
                description: 'Description for Book 6',
                isDraft: true,
                isPublished: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Book 7',
                authorId: 3,
                genreId: 4,
                publishedDate: '2023-07-01',
                description: 'Description for Book 7',
                isDraft: true,
                isPublished: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Book 8',
                authorId: 4,
                genreId: 5,
                publishedDate: '2023-08-01',
                description: 'Description for Book 8',
                isDraft: true,
                isPublished: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Book 9',
                authorId: 1,
                genreId: 1,
                publishedDate: '2023-09-01',
                description: 'Description for Book 9',
                isDraft: true,
                isPublished: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Book 10',
                authorId: 2,
                genreId: 2,
                publishedDate: '2023-10-01',
                description: 'Description for Book 10',
                isDraft: true,
                isPublished: false,
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
        await queryInterface.bulkDelete('Books', null, {});
    },
};
