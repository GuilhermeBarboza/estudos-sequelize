const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const Satelite = sequelize.define('satelites', {
  nome: DataTypes.STRING,
  numSerie: DataTypes.INTEGER,
  planetaId: DataTypes.INTEGER
});

module.exports = Satelite;