'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('ShoppingListItems', [{
        shopping_list_id: 1,
        item_id: 1,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('ShoppingListItems', [{
        shopping_list_id: 1,
        item_id: 2,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('ShoppingListItems', [{
        shopping_list_id: 1,
        item_id: 3,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('ShoppingListItems', [{
        shopping_list_id: 2,
        item_id: 1,
        quantity: 2,
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('ShoppingListItems', [{
        shopping_list_id: 2,
        item_id: 2,
        quantity: 2,
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('ShoppingListItems', [{
        shopping_list_id: 2,
        item_id: 3,
        quantity: 2,
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('ShoppingListItems', [{
        shopping_list_id: 2,
        item_id: 4,
        quantity: 2,
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('ShoppingListItems', [{
        shopping_list_id: 2,
        item_id: 5,
        quantity: 2,
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('ShoppingListItems', [{
        shopping_list_id: 2,
        item_id: 6,
        quantity: 2,
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('ShoppingListItems', [{
        shopping_list_id: 4,
        item_id: 5,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('ShoppingListItems', [{
        shopping_list_id: 4,
        item_id: 6,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date()
      }])
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('ShoppingListItems', { shopping_list_id: 1, item_id: 1 }, {}),
      queryInterface.bulkDelete('ShoppingListItems', { shopping_list_id: 1, item_id: 2 }, {}),
      queryInterface.bulkDelete('ShoppingListItems', { shopping_list_id: 1, item_id: 3 }, {}),

      queryInterface.bulkDelete('ShoppingListItems', { shopping_list_id: 2, item_id: 1 }, {}),
      queryInterface.bulkDelete('ShoppingListItems', { shopping_list_id: 2, item_id: 2 }, {}),
      queryInterface.bulkDelete('ShoppingListItems', { shopping_list_id: 2, item_id: 3 }, {}),
      queryInterface.bulkDelete('ShoppingListItems', { shopping_list_id: 2, item_id: 4 }, {}),
      queryInterface.bulkDelete('ShoppingListItems', { shopping_list_id: 2, item_id: 5 }, {}),
      queryInterface.bulkDelete('ShoppingListItems', { shopping_list_id: 2, item_id: 6 }, {}),

      queryInterface.bulkDelete('ShoppingListItems', { shopping_list_id: 4, item_id: 5 }, {}),
      queryInterface.bulkDelete('ShoppingListItems', { shopping_list_id: 4, item_id: 6 }, {}),

    ]);
  }
};
