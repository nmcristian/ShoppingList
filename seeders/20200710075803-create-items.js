'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('Items', [{
        id: 1,
        name: 'One',
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('Items', [{
        id: 2,
        name: 'Two',
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('Items', [{
        id: 3,
        name: 'Three',
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('Items', [{
        id: 4,
        name: 'Four',
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('Items', [{
        id: 5,
        name: 'Five',
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('Items', [{
        id: 6,
        name: 'Six',
        created_at: new Date(),
        updated_at: new Date()
      }])
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('Items', { id: 1 }, {}),
      queryInterface.bulkDelete('Items', { id: 2 }, {}),
      queryInterface.bulkDelete('Items', { id: 3 }, {}),
      queryInterface.bulkDelete('Items', { id: 4 }, {}),
      queryInterface.bulkDelete('Items', { id: 5 }, {}),
      queryInterface.bulkDelete('Items', { id: 6 }, {})
    ]);
  }
};
