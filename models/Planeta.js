// model
const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const Planeta = sequelize.define('planetas', {
  // inserção da estrutura dos campos da tabela 'planetas'
  nome: DataTypes.STRING,
  posicao: DataTypes.INTEGER,
});

module.exports = Planeta;