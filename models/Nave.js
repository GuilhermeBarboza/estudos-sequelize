const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const Nave = sequelize.define('naves', {
  nome: DataTypes.STRING,
  capacidade: DataTypes.INTEGER
});

module.exports = Nave;