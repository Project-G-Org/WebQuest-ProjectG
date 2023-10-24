const Sequelize = require('sequelize');
const sequelize = new Sequelize ('Users', 'root', '12111211', {
    host: 'localhost',
    dialect: 'mysql'});