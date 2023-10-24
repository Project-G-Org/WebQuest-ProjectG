const Sequelize = require('sequelize');
const sequelize = new Sequelize ('Users', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'});