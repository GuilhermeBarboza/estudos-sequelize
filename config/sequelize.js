// para manipular o banco de dados
const Sequelize = require('sequelize');
const database = require('./config');

const sequelize = new Sequelize(database);

module.exports= sequelize;

