const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const Cap = sequelize.define('caps', {
  nome: DataTypes.STRING,
  numRegistro: DataTypes.STRING
});

module.exports = Cap;