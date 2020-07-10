'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ShoppingListItems', {
            shopping_list_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'ShoppingLists',
                    key: 'id',
                    onDelete: 'CASCADE'
                },
                allowNull: false
            },
            item_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'Items',
                    key: 'id'
                },
                allowNull: false
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('ShoppingListItems');
    }
};