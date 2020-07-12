'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Users',
        'role',
        {
          type: Sequelize.STRING,
          defaultValue: 'User',
          allowNull: true
        }

    ).then(function (data) {
      queryInterface.addConstraint('Users', ['role'], {
        type: 'check',
        where: {
          role: ['User', 'Admin']
        }
      })

    }).then(function (data) {
      queryInterface.bulkUpdate('Users', {
        role: "User"
      })

    }).then(function (data) {
      queryInterface.changeColumn(
          "Users",
          "role",
          {
            type: Sequelize.STRING,
            allowNull: false
          }
      )
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'role');
  }
};
