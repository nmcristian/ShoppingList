const Sequelize = require('sequelize');

export const sequelize = new Sequelize('shopping_list', 'nita', null, {
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false,
    omitNull: false
});