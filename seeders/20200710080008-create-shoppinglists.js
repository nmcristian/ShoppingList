'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('ShoppingLists', [{
        id: 1,
        name: 'First ShoppingList',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('ShoppingLists', [{
        id: 2,
        name: 'Second ShoppingList',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('ShoppingLists', [{
        id: 3,
        name: 'Third ShoppingList',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('ShoppingLists', [{
        id: 4,
        name: 'actually a wishlist',
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }])
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('ShoppingLists', { id: 1 }, {}),
      queryInterface.bulkDelete('ShoppingLists', { id: 2 }, {}),
      queryInterface.bulkDelete('ShoppingLists', { id: 3 }, {}),
      queryInterface.bulkDelete('ShoppingLists', { id: 4 }, {})
    ]);
  }
};
