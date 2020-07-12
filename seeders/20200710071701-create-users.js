'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('Users', [{
        id: 1,
        first_name: 'Cristian',
        last_name: 'Nita',
        email: 'nmcristian@gmail.com',
        password: await bcrypt.hash('123456', (await bcrypt.genSalt(10))),
        role: 'User',
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('Users', [{
        id: 2,
        first_name: 'Second User',
        last_name: 'Test',
        email: 'seconduser.test@yopmail.com',
        password: await bcrypt.hash('123456', (await bcrypt.genSalt(10))),
        role: 'User',
        created_at: new Date(),
        updated_at: new Date()
      }]),

      queryInterface.bulkInsert('Users', [{
        id: 3,
        first_name: 'Idag',
        last_name: 'Admin',
        email: 'idag.test@yopmail.com',
        password: await bcrypt.hash('12345678', (await bcrypt.genSalt(10))),
        role: 'Admin',
        created_at: new Date(),
        updated_at: new Date()
      }])
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('Users', { id: 1 }, {}),
      queryInterface.bulkDelete('Users', { id: 2 }, {}),
      queryInterface.bulkDelete('Users', { id: 3 }, {})
    ]);
  }
};
